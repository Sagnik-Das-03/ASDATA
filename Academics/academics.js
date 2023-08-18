const departmentDropdown = document.getElementById('departmentDropdown');
const semesterDropdown = document.getElementById('semesterDropdown');
const subjectsList = document.getElementById('subjectsList');
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

function loadSubjectContent(subject) {
  // Simulated content loading
  const subjectContent = getSubjectContent(subject);

  // Display subject content
  subjectContentContainer.innerHTML = `
    <h2>${subject}</h2>
    <div class="content">${subjectContent}</div>
  `;
}

function getSubjectContent(subject) {
  // Simulated data fetching logic
  return `Content for ${subject} goes here.`;
}

departmentDropdown.addEventListener('change', populateSubjects);
semesterDropdown.addEventListener('change', populateSubjects);
