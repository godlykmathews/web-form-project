function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    const errorMessages = [];

    // Validate name
    if (name.trim() === '') {
        errorMessages.push('Name is required.');
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.push('Please enter a valid email address.');
    }

    // Validate password
    if (password.length < 6) {
        errorMessages.push('Password must be at least 6 characters long.');
    }
    
    // Validate message
    if (message.trim() === '') {
        errorMessages.push('Message is required.');
    }

    // Display error messages or submit the form
    const errorContainer = document.getElementById('error-messages');
    errorContainer.innerHTML = '';
    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const errorItem = document.createElement('li');
            errorItem.textContent = message;
            errorContainer.appendChild(errorItem);
        });
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    const resetButton = document.getElementById('reset-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Always prevent default submission
        
        if (validateForm()) {
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
            successMessage.classList.add('fade-in');
            
            // Optional: Send form data to server using fetch or other methods
            // fetch('/submit-form', {
            //     method: 'POST',
            //     body: new FormData(form)
            // })
            // .then(response => response.json())
            // .then(data => console.log('Success:', data))
            // .catch(error => console.error('Error:', error));
        }
    });
    
    // Reset button functionality
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            // Hide success message and show form
            successMessage.classList.add('hidden');
            form.style.display = 'block';
            
            // Reset the form fields
            form.reset();
            
            // Clear any remaining error messages
            document.getElementById('error-messages').innerHTML = '';
        });
    }
});