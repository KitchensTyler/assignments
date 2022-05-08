<div id = "header">Header</div>

<button id = "button">Change-Color Button</button>

var button = document.getElementbyId("button")
var header = document.getElementbyId("header")
// button.addEventListener("click",() => { 
//     header.style.color = "blue"
// })

// header.style.color = "blue"
console.log(header.style.color)

function colorToggle(){
  if (header.style.color ==="blue") {
    header.style.color = "black"
} else if (header.style.color === "black"){
    header.style.color = "blue"
}
console.log(header.style.color)
}
  
button.addEventListener("click", colorToggle);
