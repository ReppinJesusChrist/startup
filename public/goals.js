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
    
  /* Failed attempt to get a service call working. I'll come back and try to fix it
  *   Before I make another attempt, I need to watch "Debugging node.js" all the way through without destraction
  *   fetch('/api/goals', {
  *       method: 'POST',
  *       headers: {'content-type': 'application/json'},
  *       body: JSON.stringify(new_goal),
  *   });
  */
    
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

/* [TODO: Finish this function]
function bool_to_tag(tags){
  const tag_names = ["Baptism", "Sacrament", "Priesthood", Obedience, "Sacrifice",
    "Gospel", "Chastity", "Consecration"];
  for (let index = 0; index < tags.length; index++) {
    const element = array[index];
    
  }
}
*/
