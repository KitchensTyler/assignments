var header = document.querySelector("#header")
header.innerHTML = "Java Script Made This!! <br/><span id='tyler'>Tyler</span> wrote this Java Script"
header.style.fontSize ="50px"
var tyler =document.getElementById('tyler')
tyler.style.color = "blue"


var message = document.querySelector(".message")
message.textContent = "Fun and good"

let btnClear = document.getElementById("clear-button")
let inputs = document.querySelector('.messages')
console.log(inputs)

btnClear.addEventListener('click', () => {
    inputs.textContent = ""
})