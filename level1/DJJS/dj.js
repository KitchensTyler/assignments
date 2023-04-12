const sqr = document.getElementById("square")

sqr.addEventListener('mouseenter', function(){
    this.style.backgroundColor = "blue"
})

document.getElementById("square").addEventListener('mousedown', function(){
    this.style.backgroundColor ="red"
})

document.getElementById("square").addEventListener('mouseup', function(){
    this.style.backgroundColor ="yellow"
})

document.getElementById("square").addEventListener('dblclick', function(){
    this.style.backgroundColor ="green"
})

document.addEventListener('wheel', () => {
    document.getElementById("square").style.backgroundColor = "orange"
})

document.addEventListener('keyup', function(event) {
    if (event.key == 'r') {
        document.getElementById("square").style.backgroundColor = "red"
    }
    if (event.key == 'b') {
        document.getElementById("square").style.backgroundColor = "blue"
    }
    if (event.key == 'y') {
        document.getElementById("square").style.backgroundColor = "yellow"
    }
    if (event.key == 'g') {
        document.getElementById("square").style.backgroundColor = "green"
    }
    if (event.key == 'o') {
        document.getElementById("square").style.backgroundColor = "orange"
    }
});

