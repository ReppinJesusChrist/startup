async function updateGoalsPage(){
  goals = await getGoals();
  displayGoals(goals);
}

function displayGoals(goals){
  const tableBodyEl = document.querySelector('#personal-goals');

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
          '" onchange="completeGoal('+i+')">' +
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
  debugger;
  const goals = await getGoals();
  let target_goal = goals[id];
  alert (target_goal);
  //target_goal.markComplete();
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

  const new_goal = new goal(description, difficulty, tag_arr);

  try{
    const response = await fetch('/api/goals', {
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
    this.date_set = new Date().toLocaleDateString();
    this.is_completed = false;
    this.date_completed = "Not completed yet";
  }

  toJSON(){
    return {
      description: this.description,
      difficulty: this.difficulty,
      tags: this.tags,
      date_set: this.date_set,
      date_completed: this.date_completed
    }
  }

  toHTML(){
    ret_string = "<td>" + this.description + "</td>" +
      "<td>" + this.date_set + "</td>" +
      "<td>" + this.date_completed + "</td>";

    return ret_string;
  }

  printTest(){
    console.log(title);
    console.log(description);
    console.log(difficulty);
    tags.forEach(element => {
      console.log(element);
    });
  }

  markComplete(){
    this.is_completed = true;
    this.date_completed = new Date().toLocaleDateString();
  }

}
