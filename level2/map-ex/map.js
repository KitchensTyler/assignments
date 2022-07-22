const arr = [1,2,3,4,5]


let doubleArr = arr.map(num => {
    return num * 2
})

console.log(doubleArr)

let stringArr = arr.map(num => {
    return `${num}`
})

console.log(stringArr)

const people = ["jOhn", "jAcob", "jIngle", "heImer", "schmIdt"]


let peopleFirstLetCap = people.map(name => {
    return  name.charAt(1).toUpperCase() + name.substring(2,).toLowerCase()
})

// name.charAt(0)

// console.log(peopleFirstLetCap)

let people1 =[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }]
    
let peopleString = people1.map(a => `${a.name}`)

console.log(peopleString)

let oldEnoughForMovie = people1.map(a => {
    if (a.age >= 18){
        return `${a.name} is old enough to see the matrix!`
    } if (a.age < 18) {
        return `${a.name} is not old enough to see the Matrix!`
    }
})

console.log(oldEnoughForMovie)


// const form = document.getElementById('form')

// let newH1sAndH2s = people1.map(nameAge => {
//     let body = document.body
//     let newH1 = document.createElement("h1")
//     let newH2 = document.createElement("h2")
//     newH1.textContent = nameAge.name
//     newH2.textContent = nameAge.age
//     body.append(newH1)
//     body.append(newH2)
// })

// console.log(newH1sAndH2s)

function readyToPutInTheDOM(arr){
    return arr.map((result) => {
        return "<h1>".concat(result.name).concat("</h1>").concat("<h2>").concat(result.age).concat("</h2>")
    })
    
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));