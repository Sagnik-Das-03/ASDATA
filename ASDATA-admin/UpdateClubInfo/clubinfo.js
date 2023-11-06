document.addEventListener('DOMContentLoaded', function() {
    const clubInfoForm = document.getElementById('club-info-form');
    const updateClubButton = document.getElementById('update-club-button');
    
    updateClubButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get the values from the form
        const clubName = document.getElementById('club-name').value;
        const clubDescription = document.getElementById('club-description').value;
        const clubLogo = document.getElementById('club-logo').value;

        // You can send these values to a server using AJAX or perform any other actions here
        // For simplicity, we'll just log the values for now
        console.log('Club Name: ', clubName);
        console.log('Description: ', clubDescription);
        console.log('Club Logo URL: ', clubLogo);

        // Clear the form after submission
        clubInfoForm.reset();
    });
});
