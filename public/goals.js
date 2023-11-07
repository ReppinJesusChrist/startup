let form = document.getElementById("goal-survey");

function setGoal(survey){
  console.log("Goal set!");
  const new_goal = new goal();
  localStorage.setItem("testGoal", JSON.stringify(new_goal));
}

class goal{
  constructor(description = "default", difficulty = "easy", tags = []) {
    //this.title = title;
    this.description = description;
    this.difficulty = difficulty;
    this.tags = tags;
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
