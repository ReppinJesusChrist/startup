const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('moroni');
const goalCollection = db.collection('goals');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

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

module.exports = { addGoal, getNumGoals, findAndCompleteGoal};