document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".glass-form");
  const submitButton = document.getElementById("submit-button");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // If all validations pass, you can submit the form to a server or take other actions
    popupMessage.textContent = "Form submitted successfully!";
    popup.style.display = "block";
    form.reset();

    // Hide the pop-up message after a few seconds (e.g., 3 seconds)
    setTimeout(function () {
      popup.style.display = "none";
    }, 3000);
  });

  function isValidEmail(email) {
    // A basic email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
