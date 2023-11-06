const toggleButtons = document.querySelectorAll('.toggle-answer');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.parentElement.nextElementSibling;
        answer.classList.toggle('active');
    });
});

document.getElementById("login").addEventListener("click", function() {
    window.location.href = "../ASDATA-admin/Onboarding/login.html"; // Replace "newpage.html" with the URL of the HTML page you want to open.
});


