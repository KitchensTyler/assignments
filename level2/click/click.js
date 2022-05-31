const btn = document.getElementById("btn")
const output = document.getElementById("output")
const form = document.getElementById("count")
let numberOfClicks = 0
output.value = numberOfClicks
let record = document.getElementById("record")
let timeRem = document.getElementById("timer")
let numClick = document.getElementById("numberClick")
let reBtn = document.getElementById("refresh")
timeRem.value = 10

record.append(localStorage.getItem("clicks"))

function clicked () {
    numberOfClicks++
}

form.addEventListener("submit", event =>{
    
})

form.addEventListener("submit", event => {
    event.preventDefault()
    
    clicked(true)
    output.value = ""
    output.append(numberOfClicks)
    localStorage.setItem("clicks",numberOfClicks)
    
})

function stopClickAndUpdate(){
    alert("Time is up, you reached " + numberOfClicks)
    output.value = 0
    numberOfClicks = 0
    record.value = ""
    record.append(localStorage.getItem("clicks"))
}

function timer (){
    timeRem.value -= 1     
}

function stopTime (){   
    clearInterval(inter)
    h1 = document.createElement("h1")
    h1.textContent = "TIMES UP!"
    record.append(h1)
    btn.remove()
} 

let inter = setInterval(timer,1000)

setTimeout(stopTime,10000);


// setTimeout(clicked,1000);

// timer()

// const timeInt = 

// stopTimer(10000)

// function stopTimer(time){
// clearInterval(timeInt,time);
// }

// setTimeout(stopClickAndUpdate,10000)

// const time = setInterval()

// const countDown = setTimeout(endTime, 5000)