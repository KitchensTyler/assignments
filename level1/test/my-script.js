// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {

    // Get the button element
    const myButton = document.getElementById("myButton");
  
    // Add a click event listener to the button
    myButton.addEventListener("click", function() {
      console.log("Button clicked!");
    });
  
    // Check if the event listener has been added
    console.log(myButton);
  
  });
  