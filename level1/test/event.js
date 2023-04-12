
<html>
<head>
	<title>Event Listener Debugging Example</title>
</head>
<body>
	<button id="myButton">Click me!</button>

	<script>
		// Get the button element
        
		const myButton = document.getElementById("myButton");

		// Add a click event listener to the button

		myButton.addEventListener("click", function() {
			console.log("Button clicked!");
		});

		// Check if the event listener has been added
		console.log(myButton);

	</script>
</body>
</html>