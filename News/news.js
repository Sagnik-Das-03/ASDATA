const collegeNews = [
    "College News 1",
    "College News 2",
    "College News 3"
];

const techNews = [
    "https://www.telegraphindia.com/edugraph/campus/google-developer-group-durgapurs-devfest-2023-a-triumph-of-innovation-and-resilience-uniting-bengals-tech-enthusiasts/cid/1978834?utm_source=whatsapp&utm_medium=social&utm_campaign=whatsapp_edugraph",
    "Local Tech News 2",
    "Local Tech News 3"
];

const clubNews = [
    "Club News 1",
    "Club News 2",
    "Club News 3"
];

function populateNewsList(newsArray, listId) {
    const newsList = document.getElementById(listId);
    newsArray.forEach((item, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = (index === 0 && newsArray === techNews) ? item : "#";
        link.target = "_blank";
        link.textContent = (index === 0 && newsArray === techNews) ? "Google Developer Group Durgapur's DevFest 2023: A Triumph of Innovation and Resilience Uniting Bengal's Tech Enthusiasts" : item;
        li.appendChild(link);
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

// Populate the news lists
populateNewsList(collegeNews, "college");
populateNewsList(techNews, "tech");
populateNewsList(clubNews, "club");
