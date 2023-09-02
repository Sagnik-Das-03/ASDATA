// Define news items as arrays
const collegeNews = [
    "College News 1",
    "College News 2",
    "College News 3"
];

const techNews = [
    "Local Tech News 1",
    "Local Tech News 2",
    "Local Tech News 3"
];

const clubNews = [
    "Club News 1",
    "Club News 2",
    "Club News 3"
];

// Function to populate the news lists
function populateNewsList(newsArray, listId) {
    const newsList = document.getElementById(listId);
    newsArray.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        newsList.appendChild(li);
    });
}

function toggleNews(sectionId) {
    const newsList = document.getElementById(sectionId);
    if (newsList.style.display === "none" || newsList.style.display === "") {
        newsList.style.display = "block";
    } else {
        newsList.style.display = "none";
    }
}


function toggleAllNews() {
    const sections = document.querySelectorAll('.news-list');
    sections.forEach((section) => {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}


// Call the populateNewsList function for each section
populateNewsList(collegeNews, "college");
populateNewsList(techNews, "tech");
populateNewsList(clubNews, "club");
