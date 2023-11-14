const express = require('express');
const app = express();
const DB = require('./database');
const Goals = require('./public/goals.js');

const NUM_GOALS_TO_DISPLAY = Goals.NUM_GOALS_TO_DISPLAY;

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

// Fetch the entire list of goals
apiRouter.get('/goals', async (_req, res) => {
  const goals = await DB.getNumGoals(NUM_GOALS_TO_DISPLAY);
  res.send(goals);
});

// Add a new goal
apiRouter.post('/goal', async (req, res) => {
  DB.addGoal(req.body);
  res.send("Success!");
});

//Mark a goal as complete
apiRouter.put('/goal', async (req, res) => {
  DB.findAndCompleteGoal(req.body.id);
  res.send("Success!!!");
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
