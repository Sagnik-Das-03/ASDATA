// academics.js

const departmentDropdown = document.getElementById('departmentDropdown');
const semesterDropdown = document.getElementById('semesterDropdown');
const subjectsList = document.getElementById('subjectsList');
const containerRight = document.querySelector('.container-right'); // Update selector
const subjectContentContainer = document.getElementById('subjectContentContainer');

const subjects = {
  CSE: {
    semester1: ['Mathematics 1', 'Physics 1', 'Chemistry 1'],
    semester2: ['Mathematics 2', 'C programming', 'Chemistry 2'],
    semester3: ['Computer Organization', 'Data Structures & Algorithms', 'Mathematics 3'],
    semester4: ['Design and Analysis of Algorithms', 'Computer Architecture', 'Discrete Mathematics'],
  },
  department2: {
    semester1: ['History 1', 'Literature 1', 'Geography 1'],
    semester2: ['History 2', 'Literature 2', 'Geography 2'],
  }
  // Add more departments, semesters, and subjects as needed
};

// ...


const videoIDs = {
  'Mathematics 1': ['', '', '', '', '', '','','','','','','','','','',''], // Add multiple video IDs
  'Physics 1': ['def456'],
  'Chemistry 1': ['ghi789', 'uvw987'],
  // Add more video IDs for other subjects
};

function getVideoID(subject) {
  return videoIDs[subject] || null; // Return the video ID or null if not found
}

// ...

function loadSubjectContent(subject) {
  // Simulated content loading
  const subjectContent = getSubjectContent(subject);
  const videoIDsArray = getVideoID(subject);

  // Display subject content
  subjectContentContainer.innerHTML = `
    <h2>${subject}</h2>
    <div class="content">${subjectContent}</div>
  `;

  // Display videos in a 2-column grid if available
  if (videoIDsArray && videoIDsArray.length > 0) {
    let videosHTML = '<div class="grid">'; // Start the grid container

    for (let i = 0; i < videoIDsArray.length; i++) {
      if (i % 2 === 0) {
        // Start a new row
        videosHTML += '<div class="grid-row">';
      }

      // Generate video embed code for each video ID
      if (videoIDsArray.length % 2 === 1 && i === videoIDsArray.length - 1) {
        // For odd number of videos, place the last video in the left column
        videosHTML += `<div class="video-container video-container-left"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoIDsArray[i]}" frameborder="0" allowfullscreen></iframe></div>`;
      } else {
        videosHTML += `<div class="video-container"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoIDsArray[i]}" frameborder="0" allowfullscreen></iframe></div>`;
      }

      if (i % 2 === 1 || i === videoIDsArray.length - 1) {
        // End the current row
        videosHTML += '</div>';
      }
    }

    videosHTML += '</div>'; // End the grid container
    containerRight.innerHTML = videosHTML;
  } else {
    containerRight.innerHTML = 'No videos available for the selected subject.';
  }
}

// ...

populateSubjects();

function populateSubjects() {
  const selectedDepartment = departmentDropdown.value;
  const selectedSemester = semesterDropdown.value;
  subjectsList.innerHTML = ''; // Clear existing subjects

  const departmentSemesterSubjects = subjects[selectedDepartment][selectedSemester] || [];

  departmentSemesterSubjects.forEach(subject => {
    const listItem = document.createElement('li');
    listItem.textContent = subject;
    listItem.addEventListener('click', () => {
      loadSubjectContent(subject);
    });
    subjectsList.appendChild(listItem);
  });
}


function getSubjectContent(subject) {
  // Simulated data fetching logic
  return `Content for ${subject} goes here.`;
}


departmentDropdown.addEventListener('change', populateSubjects);
semesterDropdown.addEventListener('change', populateSubjects);
