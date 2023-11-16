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
  };
  await userCollection.insertOne(user);
  return user;
}

async function addGoal(goal){
  const result = await goalCollection.insertOne(goal);
  return result;
}

function getNumGoals(num) {
  const query = {};
  let options = { limit: num };
  if(num == 'all'){
    options = {};
  }
  //options.sort = { date_set: -1} [TODO: Debug this]
  const cursor = goalCollection.find(query, options);
  return cursor.toArray();
}

async function findAndCompleteGoal(id){
  const query = { id: id};
  const update = { 
    $set: { is_completed: true, date_completed: new Date().toLocaleDateString() },
  };
  await goalCollection.updateOne(query, update); 
}

module.exports = { 
  getUser,
  getUserByToken,
  createUser,
  userCollection,
  addGoal, 
  getNumGoals, 
  findAndCompleteGoal,
};