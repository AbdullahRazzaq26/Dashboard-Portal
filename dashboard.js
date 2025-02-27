if (localStorage.getItem('login') == "true") {
    window.location.href = 'dashboard.html'
} else {
    window.location.href = 'Login.html'
}

var postPopup = document.getElementById("postPopup")
var postPopupContent = document.getElementById("postPopupContent")
var postPopupTitle = document.getElementById("postPopupTitle")
var posts = document.getElementById("posts")
var finalPost = JSON.parse(localStorage.getItem("finalPost")) || []
var header = document.getElementById("header")
var content = document.getElementById("content")
var profile = document.getElementById("profile-section")

// var userData = JSON.parse(localStorage.getItem("userData")) || {};
var userData = JSON.parse(localStorage.getItem("loggedInUser")) || {};


if (userData.name) {
    var userName = userData.name;
    var userEmail = userData.email;
    var userPassword = userData.password;
    var userGender = userData.gender;
    
    header.innerHTML = `<h1> Welcome ${userName}</h1>`;
}


// for (let i = 0; i < userData.length; i++) {

//     var userName = userData[i].name;
//     var userEmail = userData[i].email;
//     var userPassword = userData[i].password;
//     var userGender = userData[i].gender;

//     console.log(userName);
//     console.log(userEmail);
//     console.log(userPassword);
//     console.log(userGender);
// }
// header.innerHTML = `<h1> Welcome ${userName}`



function addPost() {
    postPopup.style.display = "block"
}
function submitPost() {
    postPopup.style.display = "none"
    var Posts = {
        postTitle: postPopupTitle.value,
        postContent: postPopupContent.value,
    }
    posts.innerHTML += `<div class="post"><h4>${Posts.postTitle}</h4> <p>${Posts.postContent}</p></div>`
    finalPost.push(Posts)
    localStorage.setItem("finalPost", JSON.stringify(finalPost))
    console.log(finalPost);
}
function closePostPopup() {
    postPopup.style.display = "none"
}
function home() {
    profile.style.display = "none"
    content.style.display = "flex"
}
function profileSection() {
    content.style.display = "none"
    profile.style.display = "block"
    profile.innerHTML = `<div class="profile-header">
                <div class="profile-pic">
                    <img src="profile.webp" alt="Profile Picture">
                </div>
                <h2>${userName}</h2>
                <p class="email">${userEmail}</p>
            </div>
            <div class="profile-details">
                <div class="detail"><span>Password:</span>${userPassword}</div>
                <div class="detail"><span>Gender:</span> ${userGender}</div>
            </div>`
}


function logout() {
    document.getElementById("logoutPopup").classList.add("active");
}

function closeLogoutPopup() {
    document.getElementById("logoutPopup").classList.remove("active");
}

function confirmLogout() {
    alert("You have been logged out!");
    localStorage.removeItem('loggedInUser');
    window.location.href = "login.html";
}

