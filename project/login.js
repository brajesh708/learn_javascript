const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Simple authentication (in a real-world scenario, you'd want to use a secure authentication mechanism)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to a dashboard or another page
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});