// academics.js

const departmentDropdown = document.getElementById('departmentDropdown');
const semesterDropdown = document.getElementById('semesterDropdown');
const subjectsList = document.getElementById('subjectsList');
const containerRight = document.querySelector('.container-right'); // Update selector
const subjectContentContainer = document.getElementById('subjectContentContainer');

const subjects = {
  CSE: {
    semester1: ['Mathematics-IA', 'Physics 1', 'Basic Electrical Engineering'],
    semester2: ['Mathematics-IIA', 'Programming for Problem Solving', 'Chemistry', 'English'],
    semester3: ['Analog & Digital Electronics', 'Computer Organization', 'Data Structures & Algorithms', 'Mathematics-III(Differential Calculus)', 'Economics for Engineers(Humanities-II)'],
    semester4: ['Design and Analysis of Algorithms', 'Computer Architecture', 'Discrete Mathematics', 'Formal Language & Automata Theory', 'Biology', 'Environmental Sciences'],
    semester5: ['Software Engineering', 'Operating System', 'Object Oriented Programming', 'Compiler Design', 'Artificial Intelligence', 'Industrial Management'],
    semester6: ['Database Management Systems', 'Computer Networks', 'Advanced Logarithms', 'Data Warehousing and Data Mining', 'Numerical Methods'],
    semester7: ['Machine Learning' , 'Cyber Security ' , 'Operations Research', 'Project Management and Entrepreneurship', 'Project-II'
    ]
  },
  department2: {
    semester1: ['S1', 'S2', 'S3'],
    semester2: ['S1', 'S2', 'S3'],
  }
  // Add more departments, semesters, and subjects as needed
};

// ...


const videoIDs = {
  //1
  'Mathematics-IA': ['', '', '', '', '', '', '', '', ''], // Add multiple video IDs
  'Physics 1': ['', '', '', ''],
  'Basic Electrical Engineering': ['', '', '', ''],
  //2
  'Mathematics-IIA': ['', '','',''],
  'Programming for Problem Solving': ['https://www.youtube.com/embed/videoseries?si=uBgP1u0s0QUU1i-i&amp;list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM','', '', ''],
  'Chemistry': ['','','',''],
  'English': ['', '', '',''],
  //3
  'Analog & Digital Electronics': ['https://www.youtube.com/embed/videoseries?si=LUFA3TXQCPsfpXv8&amp;list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm', '', '', ''],
  'Computer Organization': ['https://www.youtube.com/embed/videoseries?si=OGRR5wolx3HPFIYR&amp;list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q', '', '', ''],
  'Data Structures & Algorithms': ['https://www.youtube.com/embed/videoseries?si=LFGbkEViE-hNqlkH&amp;list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y', '', '', ''],
  'Mathematics-III(Differential Calculus)': ['', '', '', ''],
  'Economics for Engineers(Humanities-II)':['', '', '', ''],
  //4
  'Design and Analysis of Algorithms': ['', '', '', ''],
  'Computer Architecture': ['https://www.youtube.com/embed/videoseries?si=OGRR5wolx3HPFIYR&amp;list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q', '','',''],'Discrete Mathematics': ['https://www.youtube.com/embed/videoseries?si=akpNMnB2tz5QkNnU&amp;list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3', '', '', ''],'Formal Language & Automata Theory': ['https://www.youtube.com/embed/videoseries?si=fLQRPhKsp7UpUXJ1&amp;list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev','','',''],'Biology':['','','',''], 'Environmental Sciences':['','','',''],
  //5
  'Software Engineering': ['','','',''],
  'Operating System': ['https://www.youtube.com/embed/videoseries?si=n6xPQ25X3Oun0V4p&amp;list=PLE-RdVsYEV0s97SmLffYDPLccThs7oDgN','', '', ''],'Object Oriented Programming': ['', '', '',''], 'Compiler Design': ['','','',''], 'Artificial Intelligence': ['','','',''], 'Industrial Management': ['', '', '', ''] 
  // Add more video IDs for other subjects
};

// Define the array of question papers
const questionPapers = [
  { department: 'CSE', semester: 'semester1', link: 'https://drive.google.com/file/d/1lXpez0GxZlBuADVw7XQ-vVn8j7D7HOcj/view?usp=sharing' },
  { department: 'CSE', semester: 'semester2', link: 'https://drive.google.com/file/d/16Uv5AK3VJ6Q7CMnRyvWyUcAD40Q1ubaU/view?usp=sharing' },
  { department: 'CSE', semester: 'semester3', link: 'https://drive.google.com/file/d/1HpZpmPRq_AGkWLMmmeC4qAdbtv8y2ncy/view?usp=sharing' },
  { department: 'CSE', semester: 'semester4', link: 'https://drive.google.com/file/d/1xHLYXsY5m-1aaF4pYXsj0UaCGp2t-wPL/view?usp=sharing' },
  { department: 'CSE', semester: 'semester5', link: 'https://drive.google.com/file/d/14XEsUqj4VHrtvuqhhpKd7y-L8a6RVpTk/view?usp=sharing' },
  { department: 'CSE', semester: 'semester6', link: 'https://drive.google.com/file/d/1M8UZQ6I8TSRy8eEDp2aOaRTDkJzQHzxl/view?usp=sharing' },
  { department: 'CSE', semester: 'semester7', link: 'https://drive.google.com/file/d/12pT9OOrD3rw4PQnmTtSofFbTK9SGo3DY/view?usp=sharing' },
  { department: 'CSE', semester: 'semester8', link: 'https://drive.google.com/file/d/1pUBQaivGdrK7IiRCPH6IBPQaISX7UBhT/view?usp=sharing' }
  // Add more semesters, departments, and links as needed
];


// Function to generate and display the question paper link
function updateQuestionPaperLink() {
  const departmentDropdown = document.getElementById('departmentDropdown');
  const semesterDropdown = document.getElementById('semesterDropdown');
  const selectedDepartment = departmentDropdown.value;
  const selectedSemester = semesterDropdown.value;

  const selectedLink = questionPapers.find((item) => item.semester === selectedSemester && item.department === selectedDepartment);

  const questionPaperLink = document.getElementById('questionPaperLink');

  if (selectedLink) {
    const downloadLink = document.createElement('a');
    downloadLink.href = selectedLink.link;

    const downloadIcon = document.createElement('i');
    downloadIcon.className = 'fa-solid fa-download fa-xl';

    const semesterText = document.createTextNode(`Download Question Paper for ${selectedSemester} (${selectedDepartment}) `);

    downloadLink.appendChild(semesterText);
    downloadLink.appendChild(downloadIcon);
    downloadLink.style.textDecoration = 'none';
    downloadLink.style.color = 'navy';
    downloadLink.target = '_blank';

    questionPaperLink.innerHTML = '';
    questionPaperLink.appendChild(downloadLink);
  } else {
    questionPaperLink.innerHTML = 'No question paper available for the selected department and semester.';
  }
}

// Attach the updateQuestionPaperLink function to the dropdowns' change events
document.getElementById('departmentDropdown').addEventListener('change', updateQuestionPaperLink);
document.getElementById('semesterDropdown').addEventListener('change', updateQuestionPaperLink);

// Initial call to populate the link based on the default selected semester (if any)
updateQuestionPaperLink();



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
