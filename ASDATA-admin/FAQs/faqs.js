function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function openModal(question) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none'; // Hide the error message

    // Clear the submit message
    clearSubmitMessage();

    // Center the modal
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Display as flex to center vertically
    modal.style.justifyContent = 'center';

    // Set the modal header with the selected question
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.textContent = question;
}


// Define an array to store questions
const questions = [];

// Function to add a question to the list
function addQuestion(question) {
    questions.push(question);

    // Update the list of questions in the HTML
    const questionList = document.getElementById('question-list');
    const listItem = document.createElement('li');
    listItem.textContent = question;
    listItem.classList.add('faq-item');
    listItem.onclick = function () {
        openModal(question); // Pass the selected question to openModal
    };
    questionList.appendChild(listItem);
}


function submitAnswer() {
    const answerTextarea = document.getElementById('answer-text');
    const answer = answerTextarea.value.trim();
    const errorMessage = document.getElementById('error-message');
    const submitMessage = document.getElementById('submit-message'); // Get the submit message div

    // Clear the submit message at the beginning
    clearSubmitMessage();

    if (answer !== '') {
        alert('Answer submitted: ' + answer);
        closeModal();
        // Clear the textarea
        answerTextarea.value = '';

        // Display a "Submit successful" message
        submitMessage.textContent = 'Answer successfully submitted!'; // Set the message text
        submitMessage.style.display = 'block';
        setTimeout(function () {
            submitMessage.style.display = 'none';
        }, 3000); // Hide the message after 3 seconds
    } else {
        errorMessage.textContent = 'Please enter an answer before submitting.';
        errorMessage.style.display = 'block';

        setTimeout(function () {
            errorMessage.style.display = 'none';
        }, 3000);
    }
}


function clearSubmitMessage() {
    const submitMessage = document.getElementById('submit-message');
    submitMessage.style.display = 'none';
}



function clearAnswer() {
    const answerTextarea = document.getElementById('answer-text');
    answerTextarea.value = ''; // Clear the textarea
}

// Add more questions as needed
const title = [
    'Question 1: How do I get started?',
    'Question 2: What are the system requirements?',
    'Question 3: Can I upgrade my subscription?',
    'Question 4: How can I contact customer support?',
    'Question 5: Is there a mobile app available?',
    'Question 6: What payment methods do you accept?',
    'Question 7: How do I reset my password?',
    'Question 8: What is your refund policy?',
    'Question 9: Can I use the service offline?',
    'Question 10: How do I cancel my subscription?'
  ];
  
  // Additional questions
  title.push('Question 11: Are there any free trial periods?');
  title.push('Question 12: How often are updates released?');
  title.push('Question 13: Is my data secure with your service?');

  const lengthOfTitle = title.length;


for (let i = 0; i < lengthOfTitle; i++) {
    const element =  title[i];
    addQuestion(element);
}
// Add questions to the list
// addQuestion('Question 1');
// addQuestion('Question 2');

window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
