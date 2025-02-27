var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var work = document.getElementById("work")
var genderArray = document.getElementsByClassName("gender")
var gender = ""
var allData = JSON.parse(localStorage.getItem("userData")) || []
var form = document.getElementById("form")
var emailerror = document.getElementById("email-error")


form.addEventListener("submit", function (event) {
    event.preventDefault()

    for (let i = 0; i < genderArray.length; i++) {
        if (genderArray[i].checked == true) {
            gender = genderArray[i].value
        }
    }
    var userData = {
        name: username.value,
        email: email.value,
        password: password.value,
        work: work.value,
        gender: gender,
    }
    var emailExists = false;

    for (let i = 0; i < allData.length; i++) {
        if (allData[i].email === email.value) {
            emailExists = true;
            break; 
        }
    }

    if (emailExists) {
        emailerror.style.display = "block"; 
        return; 
    } else {
        emailerror.style.display = "none";
    }

    allData.push(userData);
    localStorage.setItem("userData", JSON.stringify(allData));
    localStorage.setItem("loggedInUser", JSON.stringify(userData));    
    window.location.href = `dashboard.html`
    console.log(allData);
    password.value = "";
    username.value = "";
    email.value = "";
    work.value = "";
    for (var i = 0; i < genderArray.length; i++) {
        genderArray[i].checked = false;
    }
})

