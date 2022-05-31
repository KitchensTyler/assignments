const form = document.querySelector("#airline-form");
var submit = document.querySelector("#submit");
// var query = document.querySelector;
console.log(form)

function formAlert() {
    console.log("form alert was called")
    var firstName = form.elements["first-name"].value;
    console.log(firstName)
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travelLocation"].value;
    var diet =[];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
console.log(firstName)
    // submit.addEventListener("onclick", function(e){
    //     alert()
    // });

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}



form.addEventListener("submit", function(e){
    e.preventDefault() 
    console.log('form was submitted')
    formAlert()
});
