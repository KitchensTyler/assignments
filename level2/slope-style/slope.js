// function collectAnimals(...animals) {
//     return [...animals]
// }

// (collectAnimals("mice","dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }

// (combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))

// function parseSentence({location,duration}){
//   return `We're going to have a good time in ${location} for ${duration}`
// }

// (parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks"
// }))

// function returnFirst(items){
//     const {firstItem} = {items}[0]; /*change this line to be es6*/
//     return firstItem
// }

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]

// function returnFavorites(arr){
//     [firstFav] = arr
//     secondFav = arr[1]
//     thirdFav = arr[2]
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}.`
// }

// // returnFavorites(favoriteActivities)

// (returnFavorites(favoriteActivities))

// function combineAnimals(arr, ...rest) {
//     return [arr, ...rest]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// (combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function product(a, ...rest) {
//   var numbers = [a, ...rest];

//   return numbers.reduce((acc, number) => acc * number, 1)
// }
// (product(1,80))
 
//  function unshift(array, ...rest) {
//   return [array, ...rest]
// }

// (unshift("a","b","c","d",["hello"]))

// // function populatePeople(names){
// //     return names.map((name) => {name = name.split(" ");
// //         // your code
// //         return {firstName}, {lastName}
        
// //     })
// // }

function populatePeople(arr){
    return arr.map(name => {name = name.split(" ")
    let firstName = name[0]
    let lastName = name[1]
    return {firstName,lastName} 
    })
}


console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

