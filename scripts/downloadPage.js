let isLeave = false;
var blackscreen = document.querySelector(".blackScreen");
var blackscreenButton = document.querySelector(".blackScreen-close");

document.addEventListener("mouseleave", (event) => {
    if ((isLeave === false) && (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))) {
        isLeave = true;
        blackscreen.style.display = "flex";
    }
});

function blackScreenClose(){

    blackscreen.style.display = "none";
}

function blackScreenCloseButtonOver(){
    blackscreenButton.style.backgroundColor = "lightgray";
}

function blackScreenCloseButtonOut(){
        blackscreenButton.style.backgroundColor = "white";
}

function blackScreenCloseButtonDown(){
    blackscreenButton.style.backgroundColor = "gray";
}