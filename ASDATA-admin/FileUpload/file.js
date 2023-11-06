document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("upload-form");
    const fileInput = document.getElementById("file-input");
    const uploadStatus = document.getElementById("upload-status");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const files = fileInput.files;

        if (files.length === 0) {
            // Display an error message when no file is chosen
            errorMessage.textContent = "Please select at least one file.";
            errorMessage.style.display = "block";

            // Hide the error message after 5 seconds
            setTimeout(function () {
                errorMessage.style.display = "none";
            }, 5000);

            return;
        } else {
            errorMessage.style.display = "none"; // Hide the error message
        }

        const formData = new FormData(form);

        // Simulate a successful upload (you should replace this with your actual upload code)
        setTimeout(function () {
            // Show the upload status message
            uploadStatus.style.display = "block";

            // Reset the form, hide the status message, and clear the file input after 3 seconds
            setTimeout(function () {
                form.reset();
                uploadStatus.style.display = "none";
                fileInput.value = ""; // Clear the file input
            }, 5000);
        }, 1000);
    });
});
