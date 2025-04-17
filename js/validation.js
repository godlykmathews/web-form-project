function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
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

document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});