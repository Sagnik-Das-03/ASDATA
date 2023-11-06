document.addEventListener("DOMContentLoaded", () => {
    const referenceList = document.getElementById("reference-list");
    const addReferenceButton = document.getElementById("add-reference");
    const updateReferenceSection = document.getElementById("update-reference");
    const updateReferenceForm = document.getElementById("update-reference-form");
    const titleInput = document.getElementById("title");
    const urlInput = document.getElementById("url");
    const cancelUpdateButton = document.getElementById("cancel-update");

    // Sample initial references
    const references = [
        { title: "Example Reference 1", url: "https://example.com/1" },
        { title: "Example Reference 2", url: "https://example.com/2" },
    ];

    // Function to display references
    function displayReferences() {
        referenceList.innerHTML = "";
        references.forEach((reference, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${reference.title} - <a href="${reference.url}" target="_blank">${reference.url}</a>
                <button class="edit" data-index="${index}">Edit</button>
            `;
            referenceList.appendChild(li);
        });
    }

    displayReferences();

    // Event listener for Add Reference button
    addReferenceButton.addEventListener("click", () => {
        updateReferenceSection.classList.remove("hidden");
        titleInput.value = "";
        urlInput.value = "";
    });

    // Event listener for Edit buttons
    referenceList.addEventListener("click", (event) => {
        if (event.target.classList.contains("edit")) {
            const index = event.target.getAttribute("data-index");
            const reference = references[index];
            titleInput.value = reference.title;
            urlInput.value = reference.url;
            updateReferenceSection.classList.remove("hidden");
            updateReferenceForm.dataset.index = index;
        }
    });

    // Event listener for Cancel Update button
    cancelUpdateButton.addEventListener("click", () => {
        updateReferenceSection.classList.add("hidden");
        updateReferenceForm.removeAttribute("data-index");
    });

    // Event listener for Update Reference form
    updateReferenceForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const index = updateReferenceForm.dataset.index;
        const newTitle = titleInput.value;
        const newUrl = urlInput.value;
        if (index !== undefined) {
            references[index] = { title: newTitle, url: newUrl };
        } else {
            references.push({ title: newTitle, url: newUrl });
        }
        displayReferences();
        updateReferenceSection.classList.add("hidden");
        updateReferenceForm.removeAttribute("data-index");
    });
});
