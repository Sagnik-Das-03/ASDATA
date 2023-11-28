const collegeNews = [
    "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://bangla.hindustantimes.com/career/dr-b-c-roy-engineering-college-is-now-poised-for-autonomy/amp-31683209065188.html&ved=2ahUKEwieo7ujouSCAxXMp1YBHadDBAkQyM8BKAB6BAgHEAI&usg=AOvVaw0NEGxFFWYHk6Di_q5epHQ-"
];

const techNews = [
    "https://www.telegraphindia.com/edugraph/campus/google-developer-group-durgapurs-devfest-2023-a-triumph-of-innovation-and-resilience-uniting-bengals-tech-enthusiasts/cid/1978834?utm_source=whatsapp&utm_medium=social&utm_campaign=whatsapp_edugraph"
];

const clubNews = [
    "https://m.facebook.com/story.php?story_fbid=pfbid02ni7oBtzF7Jh5kvWzxUz1EKQCCrRg4EEfTiDjUThF1n8FpwAbSFuQpGnoggsesLFol&id=100063657649909&mibextid=CDWPTG",
    "https://m.facebook.com/story.php?story_fbid=pfbid0315xNvoDmSgcZ91tU2WykhvRwS8TBZehQxWCsyWeiheKDVSXC7dwoN7ZrsYH7XHExl&id=100063657649909&mibextid=CDWPTG"];

function populateNewsList(newsArray, listId) {
    const newsList = document.getElementById(listId);
    newsArray.forEach((item, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");

        if (index === 0 && newsArray === techNews && isValidURL(item)) {
            link.href = item; // Use the provided URL for the first item in techNews
        } else {
            link.href = item // Placeholder link for other items or non-URLs
        }

        link.target = "_blank";
        link.textContent = item; // Set the text content to the actual content of the item
        li.appendChild(link);
        newsList.appendChild(li);
    });
}

// Function to check if a string is a valid URL
function isValidURL(str) {
    try {
        new URL(str);
        return true;
    } catch (error) {
        return false;
    }
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
