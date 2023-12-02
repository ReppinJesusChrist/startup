const express = require('express');
const app = express();
const DB = require('./database');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const { sock_it } = require('./webSocket');

// Don't change this without also changing the constant in database.js (I tried to link them but it didn't work [TODO: Try again])
const NUM_GOALS_TO_DISPLAY = 'all';

const authCookieName = 'token';

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Cookie parsing software
app.use(cookieParser());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await DB.userCollection.findOne({ token: authToken});
  if(user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msdg: 'Unauthorized' });
})

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    if(!(token === user.token)){
      res.status(401).send({ msg: "Incorrect Token" });
      return;
    }
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Fetch the entire list of goals
secureApiRouter.get(`/goals/:email`, async (_req, res) => {
  const goals = await DB.getUserGoals(_req.params.email, NUM_GOALS_TO_DISPLAY);
  res.send(JSON.stringify(goals));
});

// Add a new goal
secureApiRouter.post('/goal', async (req, res) => {
  DB.addGoal(req.body.goal, req.body.email);
  res.send("Success!");
});

//Mark a goal as complete
secureApiRouter.put('/goal/:email', async (req, res) => {
  DB.findAndCompleteGoal(req.params.email, req.body.id);
  res.send("Success!!!");
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

sock_it(httpService);