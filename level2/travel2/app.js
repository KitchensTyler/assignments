const myForm = document.getElementById("flight")

myForm.addEventListener("submit", event => {
    event.preventDefault()

    const firstName = myForm.firstName.value
    const lastName = myForm.lastName.value
    const age = myForm.age.value
    const gender = myForm.gender.value
    const location = myForm.location.value

    var diets = []
    var dietBoxes = myForm.querySelectorAll("input[name=diet]:checked")
    for (var i = 0; i < dietBoxes.length; i++){
        diets.push(dietBoxes[i].value)
    }

    alert("Name: " + firstName + " " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + location + "\nDiet Restrictions: " + diets)

    myForm.firstName.value= ""
    myForm.lastName.value= ""
    myForm.age.value= ""
    myForm.gender.value= ""
    myForm.location.value= ""
})