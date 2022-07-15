const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
let arr3 = [ ]

arr3 = [...arr1, ...arr2]
console.log(arr3)


const people = [ "John", "Adam", "Amber" ]
function peopleElements(arr) {
   return arr.map(item => {
      return  `<h1>${item}</h1>`
   })
}

console.log(peopleElements(people))

Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Bill</h1>" ]

return `${a.name} is old enough to see the matrix!`
