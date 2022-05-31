const goombaForm = document.getElementById("goombaForm")
const bombForm = document.getElementById("bombForm")
const cheepForm = document.getElementById("cheepForm")

const goombainput = document.getElementById("goombaIn")
const bombinput = document.getElementById("bombIn")
const cheepinput = document.getElementById("cheepIn")
const outputBox = document.getElementById("output")
const submitBtn = document.getElementById("subBtn")
const clearBtn = document.getElementById("clrBtn")

function addAll(num1,num2,num3){
    let num11 = parseInt(num1) * 5
    let num22 = parseInt(num2) * 7
    let num33 = parseInt(num3) * 11

    return parseInt(num11) + Number(num22) + Number(num33)
}

submitBtn.addEventListener("click", event => {
    let goomba = goombainput.value
    let bomb = bombinput.value
    let cheep = cheepinput.value

    if(goomba === ""){
        alert("Please fill in Goombas caught, if none type 0")
        return false
    } else if (bomb === ""){
        alert("Please fill in Bop-ombs caught, if none type 0")
        return false
    } else if (cheep === ""){
        alert("Please fill in Cheep-Cheeps caught, if none type 0")
        return false
    }
    
    let all = addAll(goomba,bomb,cheep)

    outputBox.append(all)

    cheepinput.value = ""
    bombinput.value = ""
    goombainput.value = ""
})

clearBtn.addEventListener("click", event => {
    outputBox.value = ""
})