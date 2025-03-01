if (!localStorage.getItem('login')) {
    window.location.href = 'Login.html';
}

var postPopup = document.getElementById("postPopup")
var postPopupContent = document.getElementById("postPopupContent")
var postPopupTitle = document.getElementById("postPopupTitle")
var posts = document.getElementById("posts")
var content = document.getElementById("content")
var profile = document.getElementById("profile-section")
var userData = JSON.parse(localStorage.getItem("loggedInUser")) || {};
var userName = userData.name;
var userEmail = userData.email;
var userPassword = userData.password;
var userGender = userData.gender;
var popupeffect = document.getElementById("popup-effect");
displayPosts()


var header = document.getElementById("header")
header.innerHTML = `<h1> Welcome ${userName}</h1>`;


function addPost() {
    postPopup.style.display = "block"
    popupeffect.style.display = "block"
}

function submitPost() {
    popupeffect.style.display = "none"
    postPopup.style.display = "none"
    var Posts = {
        postTitle: postPopupTitle.value,
        postContent: postPopupContent.value,
    }

    var finalPost = JSON.parse(localStorage.getItem(userEmail)) || []
    finalPost.push(Posts)
    localStorage.setItem(userEmail, JSON.stringify(finalPost))
    console.log(finalPost);

    displayPosts()
} 

function displayPosts() {
    posts.innerHTML = `                <h1>Your Posts</h1>
                <button onclick="addPost()" id="addPost" class="addpost">Add Post</button>`;
    var finalPost = JSON.parse(localStorage.getItem(userEmail)) || []

    for (let i = 0; i < finalPost.length; i++) {
        posts.innerHTML += `

            <div class="allPosts">
        <div class="post">
            <div class="post-header">
                <img src="profile.webp" alt="User Profile" class="profile-pic">
                <div class="user-info">
                    <h5 class="username">${userName}</h5>
                    <span class="post-time">2 hours ago</span>
                </div>
            </div>

            <h4>${finalPost[i].postTitle}</h4>
            <p>${finalPost[i].postContent}</p>

            <div class="post-actions">
                <button class="action-btn like-btn"><i class="fas fa-thumbs-up"></i> Like</button>
                <button class="action-btn comment-btn"><i class="fas fa-comment"></i> Comment</button>
                <button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>
                <button class="action-btn delete-btn" onclick="deletePost(${i})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    </div>


        `; 
    }
}

function deletePost(index) {
    var finalPost = JSON.parse(localStorage.getItem(userEmail)) || []    
    finalPost.splice(index, 1)
    localStorage.setItem(userEmail, JSON.stringify(finalPost))
    displayPosts()
}


window.onload = function () {
    displayPosts();
};

function closePostPopup() {
    postPopup.style.display = "none"
    popupeffect.style.display = "none"

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