function updateGoalsPage(){
  const testMessage = localStorage.getItem("testGoal");
  console.log(testMessage);
}

async function setGoal(data){
  let tag_arr = [];
  let description = 'NA';
  let difficulty = 'NA';
  for(let [key, value] of data){
    if(key == 'covenant-list'){
      tag_arr.push(value);
    } else if(key == 'goal-description'){
      description = value;
    } else if(key == 'goal-difficulty'){
      difficulty = value;
    }
  }

  const new_goal = new goal(description, difficulty, tag_arr);
  console.log(localStorage.getItem("goal_arr"));
  if(localStorage.getItem("goal_arr") == "[object Object]" 
      || localStorage.getItem("goal_arr") == null){
    localStorage.setItem("goal_arr", JSON.stringify([]));
  }
  let goal_arr = JSON.parse(localStorage.getItem("goal_arr"));
  goal_arr.unshift(new_goal);
  localStorage.setItem("goal_arr", JSON.stringify(goal_arr));
  localStorage.setItem("testGoal", JSON.stringify(new_goal));
    
}

/* Failed attempt to get a service call working. I'll come back and try to fix it
  *   Before I make another attempt, I need to watch "Debugging node.js" all the way through without destraction
  *   fetch('/api/goals', {
  *       method: 'POST',
  *       headers: {'content-type': 'application/json'},
  *       body: JSON.stringify(new_goal),
  *   });
  */
async function postTest(){
  test_array = ["Always", "Remember", "Him."];

  try{
    const response = await fetch('/api/goals', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(test_array),
    });
    
    const goals = await response.json();
  } catch {
    alert("postTest didn't work right");
  }
  
}

async function getTest(){
  try{
    const response = await fetch('/api/goals');
    let goals = await response.json();
    alert(goals);
  } catch {
    alert("Fetch didn't work correctly");
  }
}

async function addAlways(){
  let goals = [];
  try{
    const response = await fetch('/api/goals');
    goals = await response.json();
    const add_string = 'Always';
    goals.push(add_string);
  } catch {
    alert("addAlways.get didn't work correctly");
  }

  try{
    const response = await fetch('/api/goals', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(goals),
    });
  } catch {
    alert("addAlways.post didn't work right");
  }
}

class goal{
  constructor(description = "default", difficulty = "easy", tags = []) {
    //this.title = title;
    this.description = description;
    this.difficulty = difficulty;
    this.tags = tags;
  }

  toJSON(){
    return {
      description: this.description,
      difficulty: this.difficulty,
      tags: this.tags
    }
  }

  printTest(){
    console.log(title);
    console.log(description);
    console.log(difficulty);
    tags.forEach(element => {
      console.log(element);
    });
  }


}
