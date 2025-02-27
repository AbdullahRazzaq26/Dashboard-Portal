var userData = JSON.parse(localStorage.getItem("userData")) || [];
var password = document.getElementById("password");
var email = document.getElementById("email");
var form = document.getElementById("form");
var emailerror = document.getElementById("email-error");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let approved = false;

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === email.value && userData[i].password === password.value) {
            approved = true;
            console.log("Login Successful");
            localStorage.setItem('login', 'true')
            localStorage.setItem('loggedInUser', JSON.stringify(userData[i])); // Store logged-in user
            window.location.href = "dashboard.html";
            return; 
        }
    }

    emailerror.style.display = "block"; 
});