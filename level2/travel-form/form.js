const form = document.getElementById("flight");
var submit = document.querySelector("#submit");


function formAlert() {
    console.log("form alert was called")
    var firstName = form.elements["first-name"].value;
    console.log(firstName)
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travelLocation"].value;
    var diet =[];
    if (form.elements['vegetarian'].checked) {
        diet.push(document.getElementById("vegetarian").value);
    }
    if (form.elements['lactose'].checked) {
        diet.push(document.getElementById("lactose").value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById("paleo").value);
    }
console.log(firstName)
   

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now go get some food");
}



form.addEventListener("submit", function(e){
    e.preventDefault() 
    console.log('form was submitted')
    formAlert()
})