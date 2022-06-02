var menu = document.querySelector("#navbar-menu");
menu.childNodes[1].style.display = "none";
function showMenu(){
    menu.classList.toggle("navbar-content-show");
    menu.classList.toggle("navbar-content-hide");
    if (menu.childNodes[1].style.display == "none")
    {
        menu.childNodes[1].style.display = "block"
    } else
    {
        setTimeout(function(){menu.childNodes[1].style.display = "none"}, 500);
    }
}

var pederImage = document.querySelector(".navbar-image");
var pederCount = 0
let speed = 10;

let dvd = {
    x: pederImage.getBoundingClientRect().left,
    y: pederImage.getBoundingClientRect().top,
    xspeed: 10,
    yspeed: 10
};

function update() {
    setTimeout(() => {
        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;
        pederImage.style.left = dvd.x+"px";
        pederImage.style.top = dvd.y+"px";
        checkHitBox();
        update();
    }, speed)
}

function pederClick(){
    pederCount++;
    console.log(pederCount);
    if (pederCount === 10){
        pederImage.style.position = "fixed";
        pederImage.style.transform = "scale(2)";
        update();
    }
}

function checkHitBox(){
    if(dvd.x+pederImage.style.width >= window.innerWidth || dvd.x <= 0){
        dvd.xspeed *= -1;
    }

    if(dvd.y+pederImage.style.height >= window.innerHeight || dvd.y <= 0){
        dvd.yspeed *= -1;
    }
}