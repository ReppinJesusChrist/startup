const NUM_GOALS_TO_DISPLAY = 'all';

async function updateGoalsPage(){
  const goals = await getGoals(NUM_GOALS_TO_DISPLAY);
  displayGoals(goals);
}

function displayGoals(goals){
  const tableBodyEl = document.querySelector('#personal-goals');
  tableBodyEl.innerHTML = "";
  if (goals.length) {
    // Update the DOM with the scores
    for (const [i, goal] of goals.entries()) {
      const positionTdEl = document.createElement('td');
      const descTdEl = document.createElement('td');
      const diffTdEl = document.createElement('td');
      const dateSetTdEl = document.createElement('td');
      const dateCompTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      descTdEl.textContent = goal.description;
      diffTdEl.textContent = goal.difficulty;
      dateSetTdEl.textContent = goal.date_set;
      if(goal.is_completed){
        dateCompTdEl.textContent = goal.date_completed;
      } else{
        dateCompTdEl.innerHTML = 'Not yet completed.' +
        '<div>' +
          '<input class="form-check-input" type="checkbox" value="" id="complete-check-'+(i + 1)+
          '" onchange="completeGoal('+goal.id+')">' +
          '<label class="form-check-label" for="defaultCheck">' +
            'Check to mark as complete' +
          '</label>' +
        '</div>';
      }


      const rowEl = document.createElement('tr');
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(descTdEl);
      rowEl.appendChild(diffTdEl);
      rowEl.appendChild(dateSetTdEl);
      rowEl.appendChild(dateCompTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=5>Go ahead and set a goal!</td></tr>';
  }
}

async function completeGoal(id){
  try{
    const response = await fetch('/api/goal', {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        //goals: JSON.stringify(goals),
        id: id,
      })
    });
  } catch {
    alert("completeGoal.PUT didn't work right");
  }
  updateGoalsPage();
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

  const new_goal = new Goal("no-JSON", description, difficulty, tag_arr);

  try{
    const response = await fetch('/api/goal', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(new_goal)
    });
    
    //const goals = await response.json();
  } catch {
    alert("setGoal.post didn't work right");
  }

  /*
  console.log(localStorage.getItem("goal_arr"));
  if(localStorage.getItem("goal_arr") == "[object Object]" 
      || localStorage.getItem("goal_arr") == null){
    localStorage.setItem("goal_arr", JSON.stringify([]));
  }
  let goal_arr = JSON.parse(localStorage.getItem("goal_arr"));
  goal_arr.unshift(new_goal);
  localStorage.setItem("goal_arr", JSON.stringify(goal_arr));
  localStorage.setItem("testGoal", JSON.stringify(new_goal));
  */  

}

async function getGoals(){
  try{
    const response = await fetch('/api/goals');
    let goals = await response.json();
    return goals;
  } catch {
    alert("getGoals.get didn't work correctly");
  }
}

class Goal{
  constructor(jason, description = "default", difficulty = "easy", tags = [], date_set = new Date().toLocaleDateString()) {
    if(jason == "no-JSON"){
      //this.title = title;
      this.description = description;
      this.difficulty = difficulty;
      this.tags = tags;
      this.date_set = date_set;
      this.id = Math.floor(Math.random() * 10000);
    } else {
      this.description = jason.description;
      this.difficulty = jason.difficulty;
      this.tags = jason.tags;
      this.date_set = jason.date_set;
      this.id = jason.id;
    }
    this.is_completed = false;
    this.date_completed = "Not completed yet"; 
  }

  toJSON(){
    return {
      description: this.description,
      difficulty: this.difficulty,
      tags: this.tags,
      date_set: this.date_set,
      is_completed: this.is_completed,
      date_completed: this.date_completed,
      id: this.id
    }
  }
}

module.exports = { NUM_GOALS_TO_DISPLAY };
