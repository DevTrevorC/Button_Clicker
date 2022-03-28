function logIn() {
    document.getElementById("logInOutButton").innerText="Logout";
}

function disappear() {
    document.getElementsByClassName("addDefButton")[0].style.visibility="hidden";
}

function load() {
    var likeButton=document.getElementsByClassName("likeButton");
    for(var i=0; i<likeButton.length;i++) {
        likeButton[i].addEventListener("click", function(){
            alert("This page says ninja was liked");
        })
    }
}