var officeItems = ["Stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;

for (var i = 0; i < officeItems.length; ++i){
    if(officeItems[i] = "stapler")
        count++;
} 
console.log(count)


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
//   for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//     if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Max max");
//     }   else{
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max");
//     }
// }

// Optional Bonus #1 

// already completed in previous #2 

// Optional Bonus #2 

for(var i = 0;  i  <  peopleWhoWantToSeeMadMaxFuryRoad.length;  i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "him"
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "her"
        }        
    
     if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in!!")
     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let "+ peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in!!") 
     }
    }
