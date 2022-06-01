var menu = document.querySelector("#navbar-menu");
var menuSwitch = true;
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