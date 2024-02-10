document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("nameInput").value;
    localStorage.setItem("userName", name); 

    window.location.href = "lessons.html"; 
});

var userName = localStorage.getItem("userName");
document.getElementById("userName").innerText = userName;
if (userName) {
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
}

document.getElementById("signOutButton").addEventListener("click", function() {
    localStorage.removeItem("userName");
    window.location.href = "index.html";
});

if (!userName) {
    document.getElementById("signOutButton").style.display = "none";
}







