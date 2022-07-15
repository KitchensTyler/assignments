const addForm = document.getElementById("add2")
const newLi = document.getElementById("addList")
const newSubLi = document.getElementById("subList")
const newMultLi = document.getElementById("multList")
const subForm = document.getElementById("sub2")
const multForm = document.getElementById("mult2")

function add (num1,num2) {
    return parseInt(num1) + Number(num2)
}
function sub (num1,num2) {
    return parseInt(num1) - Number(num2)
}
function mult (num1,num2) {
    return parseInt(num1) * Number(num2)
}
function empty(){
    if(addForm.num1.value === ""){
        alert("Please enter a valid number")
        return false
    } else if (addForm.num2.value === ""){
        alert("Please enter a valid number")
        return false
    } 
}
addForm.addEventListener("submit", function(event){ 
    event.preventDefault()
    const num1 = addForm.num1.value
    const num2 = addForm.num2.value
    // empty()
    if(addForm.num1.value === ""){
        alert("Please enter a valid number")
        return false
    } else if (addForm.num2.value === ""){
        alert("Please enter a valid number")
        return false
    } 
    addForm.num1.value = ""
    addForm.num2.value = ""
    
    const li = document.createElement("li")
    li.textContent = num1 + " + " + num2 + " " + "= " + (add(num1,num2))
    newLi.append(li)
})
subForm.addEventListener("submit", function(event){ 
    event.preventDefault()
    const num1 = subForm.num1.value
    const num2 = subForm.num2.value
    if(subForm.num1.value === ""){
        alert("Please enter a valid number")
        return false
    } else if (subForm.num2.value === ""){
        alert("Please enter a valid number")
        return false
    } 
    subForm.num1.value = ""
    subForm.num2.value = ""
    
    const li = document.createElement("li")
    li.textContent = num1 + " - " + num2 + " " + "= " + sub(num1,num2)
    newSubLi.append(li)
})
multForm.addEventListener("submit", function(event){ 
    event.preventDefault()
    const num1 = multForm.num1.value
    const num2 = multForm.num2.value
    if(multForm.num1.value === ""){
        alert("Please enter a valid number")
        return false
    } else if (multForm.num2.value === ""){
        alert("Please enter a valid number")
        return false
    } 
    multForm.num1.value = ""
    multForm.num2.value = ""
    
    const li = document.createElement("li")
    li.textContent =  num1 + " x " + num2 + " " + "= " + mult(num1,num2)
    newMultLi.append(li)
})