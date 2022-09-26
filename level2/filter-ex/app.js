// let Arr = [1,2,3,4,5,6,7,8,9,10]

// let newArr = Arr.filter(num => num > 5)

// console.log(newArr)

// let evenArr = Arr.filter(num => num % 2 === 0)

// console.log(evenArr)

let stringArr = ["dog", "wolf", "by", "family", "eaten", "camping"]

let stringArrLessFive = stringArr.filter(string => string.length <= 5)

console.log(stringArrLessFive)

let peopleObjectsArr = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

let nonIlluminati = peopleObjectsArr.filter(people => people.member === true)

console.log(nonIlluminati)

let movieGoers = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

let oldEnough = movieGoers.filter(person => person.age >= 18)

console.log(oldEnough)







// let animals = ["bird", "bird dog", "humming bird", "dog"]

// function arrOfStrings (){
//     for (let i = 0; i < animals.length; i++){
//         for (let j = 0; j < animals[i].length; j++){
//             if (animals[i][j] === " " ){
//                 console.log(animals[i])
                
//             }
//         }
//     }
// }      

// // arrOfStrings(animals)

// let animalS = animals.filter(a => !a.includes(" "))

// console.log(animalS)