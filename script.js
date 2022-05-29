    var myVideo = document.getElementById("video1");
    var peder = document.getElementById("peder");
    var peder2 = document.getElementById("peder2");
    var black = document.getElementById("blackScreen");
    var ad1 = document.querySelector(".ad1");
    var ad1close = document.querySelector(".closeButton");
    function play() {
        myVideo.play();
        peder2.classList.remove("inline-4");
        peder2.classList.add("inline-1");
        peder.classList.remove("inline-3");
        peder.classList.add("inline-2");
        black.classList.add("blackScreen");
        function setOpacity() {
            ad1.style.opacity = "1";
        }
        setTimeout(setOpacity, 4000);
    }
    function linkTo(){
        window.open('http://www.sana.kiev.ua/main.php?rzm=patch-pes-2013-skachat-torrent');
        ad1close.classList.remove("closeButton");
    }