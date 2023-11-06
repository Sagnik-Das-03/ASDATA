document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("upload-form");
    const fileInput = document.getElementById("file-input");
    const uploadStatus = document.getElementById("upload-status");
    const errorMessage = document.getElementById("error-message");

    uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Reset previous messages
        errorMessage.innerText = "";
        uploadStatus.style.display = "none";

        // Check if files are selected
        if (fileInput.files.length === 0) {
            errorMessage.innerText = "Please select one or more files to upload.";
        } else {
            // Simulate a successful upload for demonstration purposes
            setTimeout(function () {
                uploadStatus.style.display = "block";
                fileInput.value = ""; // Reset file input
            }, 2000);
        }
    });
});
