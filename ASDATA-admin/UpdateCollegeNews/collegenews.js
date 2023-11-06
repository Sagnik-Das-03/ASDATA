// JavaScript to handle form submission and news updates
document.addEventListener("DOMContentLoaded", function () {
    const newsForm = document.getElementById("news-form");
    const newsList = document.getElementById("news-list");

    newsForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Get form values
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Create a new list item for the news update
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;

        // Append the new news update to the list
        newsList.appendChild(listItem);

        // Clear the form fields
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    });

    // Event delegation for edit and delete buttons
    newsList.addEventListener("click", function (e) {
        if (e.target.classList.contains("edit-button")) {
            const listItem = e.target.closest("li");
            const titleElement = listItem.querySelector("h3");
            const contentElement = listItem.querySelector("p");
            const title = titleElement.textContent;
            const content = contentElement.textContent;

            // Replace the news update with an edit form
            listItem.innerHTML = `
                <form class="edit-form">
                    <label for="edit-title">Title:</label>
                    <input type="text" id="edit-title" value="${title}">
                    <label for="edit-content">Content:</label>
                    <textarea id="edit-content">${content}</textarea>
                    <button class="save-button">Save</button>
                </form>
            `;
        }

        if (e.target.classList.contains("delete-button")) {
            // Handle delete functionality here
            e.target.closest("li").remove();
        }
    });

    // Event delegation for save button within edit forms
    newsList.addEventListener("click", function (e) {
        if (e.target.classList.contains("save-button")) {
            const editForm = e.target.closest(".edit-form");
            const updatedTitle = editForm.querySelector("#edit-title").value;
            const updatedContent = editForm.querySelector("#edit-content").value;
            
            // Replace the edit form with the updated news update
            editForm.parentElement.innerHTML = `
                <h3>${updatedTitle}</h3>
                <p>${updatedContent}</p>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
        }
    });
});
