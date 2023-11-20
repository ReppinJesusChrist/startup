const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('moroni');
const goalCollection = db.collection('goals');
const userCollection = db.collection('users');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
    goals: [],
  };
  await userCollection.insertOne(user);
  return user;
}

async function addGoal(goal, u_email){
  let userTest = await userCollection.findOne({email : u_email});
  let goals = userTest.goals;
  goals.push(JSON.parse(goal));
  await userCollection.findOneAndUpdate(
    { email : u_email },
    { $set : { goals : goals }}
  );
  userTest = await userCollection.findOne({email : u_email});
}

async function getUserGoals(email, num) {
  const query = { email: email };
  const user = await userCollection.findOne(query);
  let goals = [];
  if(num = 'all') num = user.goals.length;
  for(let i = 0; i < num; ++i){
    goals.push(user.goals[i]);
  }
  return goals;
}

async function findAndCompleteGoal(email, id){
  const query = { email: email, "goals.id": id};
  let user = await userCollection.findOne(query);
  const update = { 
    $set: { 
      "goals.$.is_completed" : true, 
      "goals.$.date_completed" : new Date().toLocaleDateString() 
    },
  };
  await userCollection.updateOne(query, update);
  user = await userCollection.findOne(query);
}

module.exports = { 
  getUser,
  getUserByToken,
  createUser,
  userCollection,
  addGoal, 
  getUserGoals, 
  findAndCompleteGoal,
};