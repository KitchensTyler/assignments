// let numbers = [1, 3, 5, 2, 90, 20]
// let smallToLarge = numbers.sort((a,b) => a - b)
// console.log(smallToLarge)

// let largeToSmall = numbers.sort((a,b) => b - a)
// console.log(largeToSmall)

// let strings = ["dog", "wolf", "by", "family", "eaten"]
// let shortToLong = strings.sort((a,b) => a.length - b.length )
// console.log(shortToLong)

// let longToShort = strings.sort((a,b) => b.length - a.length)
// console.log(longToShort)

// let alphabetically = strings.sort()
// console.log(alphabetically)

let people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

let byAge = people.sort((a,b) => a.age - b.age)
console.log(byAge)