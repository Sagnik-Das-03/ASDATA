const collegeNewsList = document.getElementById("college-news-list");
const localTechNewsList = document.getElementById("local-tech-news-list");
const clubNewsList = document.getElementById("club-news-list");

// Sample data
const newsData = {
  collegeNews: ["Event on Campus", "New Faculty Joins"],
  localTechNews: ["Startup Receives Funding", "Tech Conference in Town"],
  clubNews: ["Coding Club Workshop", "Art Club Exhibition"]
};

// Function to toggle visibility of news list
function toggleNewsList(list) {
  list.classList.toggle("hidden");
}

// Populate news lists
function populateNewsList(list, newsArray) {
  newsArray.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

populateNewsList(collegeNewsList, newsData.collegeNews);
populateNewsList(localTechNewsList, newsData.localTechNews);
populateNewsList(clubNewsList, newsData.clubNews);

// Add click event to section buttons
document.getElementById("college-news").querySelector("button").addEventListener("click", () => {
  toggleNewsList(collegeNewsList);
});

document.getElementById("local-tech-news").querySelector("button").addEventListener("click", () => {
  toggleNewsList(localTechNewsList);
});

document.getElementById("club-news").querySelector("button").addEventListener("click", () => {
  toggleNewsList(clubNewsList);
});
