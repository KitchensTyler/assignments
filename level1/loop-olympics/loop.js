// for (var i = 0; i <= 9; i++){
//     console.log(i)
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (var i = 9; i >=0; i--){
//     console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

// for (var i = 0; i < 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// const numbers = []
// numbers.push(1,2,3,4,5,6,7,8,9)
// console.log(numbers)


// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < fruit.length; i++){
//         console.log(i)
// //     }
//     const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
//     var everyOtherFruit= []
    
    
//     for(var i= 0; i <= fruit.length; i += 2){
//         everyOtherFruit.push(fruit[i])
//     }
//     console.log(everyOtherFruit)

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
  
//   for( let i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
//   }

//   const nameArr = []
//   for (let i = 0; i < peopleArray.length; i++){
//     nameArr.push(peopleArray[i].name)
//   }
//   console.log(nameArr)

//   const occArr = []
//   for (let i = 0; i < peopleArray.length; i++){
//     occArr.push(peopleArray[i].occupation)
//   }
//   console.log(occArr)

  const otherName = []
for ( let i = 0; i < peopleArray.length; i+= 2){
    otherName.push(peopleArray[i].name)
}
console.log(otherName)

const newOcc = []
for ( let i = 1; i < peopleArray.length; i+= 2){
    newOcc.push(peopleArray[i].occupation)
}
console.log(newOcc)