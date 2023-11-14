const express = require('express');
const app = express();
const DB = require('./database');

const cookieParser = require('cookie-parser');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

app.use(cookieParser());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetGoals
apiRouter.get('/goals', async (_req, res) => {
  const goals = await DB.getNumGoals('all');
  res.send(goals);
});

// SubmitScore
apiRouter.post('/goal', async (req, res) => {
  DB.addGoal(req.body);
  const goals = DB.getNumGoals('all');
  res.send(goals);
});

//mark a goal as complete
apiRouter.put('/goal', async (req, res) => {
  DB.findAndCompleteGoal(req.body.id);
  res.send("Success!!!");
});

/*
apiRouter.post('/users', (req, res) => {
  const req_user = req.body.user;
  const req_username = user.username;
  const req_password = user.password;
  for (const [i, user] of users.entries()){
    if(req_username == user.username){

    }
  }
})
*/

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
