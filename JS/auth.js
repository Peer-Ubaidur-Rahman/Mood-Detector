document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const terms = document.getElementById('terms').checked;
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            if (!terms) {
                alert('Please agree to the Terms of Service and Privacy Policy');
                return;
            }

            console.log('Signup data:', { fullname, email, password });

            alert('Account created successfully! (Demo Mode)\nIn Week 3, this will connect to the backend.');

            window.location.href = 'login.html';
        });
    }
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            console.log('Login data:', { email, password, remember });

            alert('Login successful! (Demo Mode)\nIn Week 3, JWT authentication will be implemented.');

            window.location.href = 'index.html';
        });
    }
});
