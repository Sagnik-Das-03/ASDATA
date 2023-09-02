function toggleNews(sectionId) {
  const newsList = document.getElementById(sectionId);
  if (newsList.style.display === "none") {
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
