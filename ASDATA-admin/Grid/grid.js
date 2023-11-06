// Define an array of options with their respective links
const options = [
    { text: "Update Sem Paper", link: "../UpdateSemPapers/sem.html" },
    { text: "Update Reference Material", link: "../UpdateReferenceMaterial/reference.html" },
    // { text: "Update Syllabus", link: "page3.html" },
    { text: "Update College News", link: "../UpdateCollegeNews/collegenews.html" },
    { text: "Update Club Info", link: "../UpdateClubInfo/clubinfo.html" },
    { text: "Update Local Tech News", link: "../UpdateLocalTechNews/localnews.html" },
    { text: "Answer FAQs", link: "../FAQs/faqs.html" },
    // { text: "Update Formula", link: "page8.html" },
    // Add more options as needed
];

document.getElementById("logout").addEventListener("click", function() {
    window.location.href = "../Onboarding/login.html"; // Replace "newpage.html" with the URL of the HTML page you want to open.
});

// Function to create the grid layout and divs
function createGrid() {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = ''; // Clear any existing content

    options.forEach(option => {
        const div = document.createElement("div");
        div.className = "grid-item";
        div.textContent = option.text;
        div.onclick = () => redirectToPage(option.link);
        gridContainer.appendChild(div);
    });
}

// Function to redirect to a specified page
function redirectToPage(page) {
    window.location.href = page;
}

// Call the createGrid function to generate the grid
createGrid();
