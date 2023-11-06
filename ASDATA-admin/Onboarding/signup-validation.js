document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signupForm = document.getElementById("signup-form");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");
    const clearFormButton = document.getElementById("clear-form");

    errorMessage.innerText = "";
    successMessage.innerText = "";

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameValue = nameInput.value;
        const usernameValue = usernameInput.value;
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        errorMessage.innerText = "";
        successMessage.innerText = "";

        if (!nameValue || !usernameValue || !emailValue || !passwordValue) {
            displayErrorMessage("All fields are required. Please fill in all the fields.");
        } else if (!isValidUsername(usernameValue)) {
            displayErrorMessage("Invalid username. Please use alphanumeric characters and symbols.");
        } else if (!isValidEmail(emailValue)) {
            displayErrorMessage("Invalid email format. Please enter a valid email address.");
        } else {
            displaySuccessMessage("Registration successful!");
            clearForm();
        }
    });

    clearFormButton.addEventListener("click", function (event) {
        clearForm();
    });

    function isValidUsername(username) {
        const usernameRegex = /^[A-Za-z0-9!@#$%^&*()_+.,;:~-]+$/;
        return usernameRegex.test(username);
    }

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    function clearForm() {
        nameInput.value = "";
        usernameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
    }

    function displayErrorMessage(message) {
        errorMessage.innerText = message;
        errorMessage.style.display = "block";

        setTimeout(function () {
            errorMessage.style.display = "none";
        }, 5000);
    }

    function displaySuccessMessage(message) {
        successMessage.innerText = message;
        successMessage.style.display = "block";

        setTimeout(function () {
            successMessage.style.display = "none";
        }, 5000);
    }
});
