document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    window.location.href = '../ClientHomeScreen/index.html'; // Redirect to ClientHomeScreen
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email); // Store the email in localStorage
    // Redirect to the ClientHomeScreen or perform any other action here
});
