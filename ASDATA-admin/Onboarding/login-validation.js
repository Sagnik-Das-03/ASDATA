document.addEventListener("DOMContentLoaded", function () {
    // Get references to the email input field and the login button
    const emailInput = document.getElementById("mail");
    const loginButton = document.getElementById("login");
    const signupButton = document.getElementById("signup");

    // Add an event listener to the login button
    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the entered email value
        const emailValue = emailInput.value;

        // Check for null or empty email
        if (!emailValue) {
            alert("Email is required. Please enter an email address.");
        } else {
            // Validate the email format using a regular expression
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!emailRegex.test(emailValue)) {
                alert("Invalid email format. Please enter a valid email address.");
            } else {
                // Email is valid, you can proceed with the login logic here
                alert("Login successful!"); // You can replace this with your actual login code
                // Redirect to "grid.html" after successful login
                window.location.href = "../Grid/grid.html";
            }
        }
    });

    

    // Add an event handler for the "Sign-up" button
    signupButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Navigate to the signup page (signup.html)
        window.location.href = "signup.html";
    });
});


