    var myVideo = document.getElementById("video1");
    var peder = document.getElementById("peder");
    var peder2 = document.getElementById("peder2");
    var black = document.getElementById("blackScreen");
    var ad1 = document.querySelector(".ad1");
    var ad1close = document.querySelector(".closeButton");
    var ad2 = document.querySelector(".ad2");
    var ad2close = document.querySelector(".closeButton2");
    var prikol = document.querySelector(".prikol");
    var prikol2 = document.querySelector(".prikol2");
    var prikol3 = document.querySelector(".prikol3");
    var countdown = 0;
    var countdownNumberEl = document.getElementById('countdown-number');
    var circleText = document.getElementById('circleButtonText');
    var countdownEl = document.getElementById('countdown');
    var circleEl = document.getElementById('circleButton');

    function play() {
        myVideo.play();
        peder2.classList.remove("inline-4");
        peder2.classList.add("inline-1");
        peder.classList.remove("inline-3");
        peder.classList.add("inline-2");
        black.classList.add("blackScreen");
        countdown = 10;
        countdownNumberEl.textContent = countdown;
        countdownEl.classList.remove("countdown");
        setInterval(function() {
            countdown -= 1;
            if (countdown <= 0)
            {
                countdownEl.style.display = "none";
                circleEl.classList.remove("circleButton");
                circleText.textContent = "X";
            }
            countdownNumberEl.textContent = countdown;
        }, 1000);
        function setOpacity1() {
            ad1.style.opacity = "1";
        }
        setTimeout(setOpacity1, 4000);
    }
    function linkTo(){
        window.open('./download.html');
        ad1close.classList.remove("closeButton");
    }
    function linkTo2(){
        prikol2.style.display = "none";
        ad2.style.opacity = "0";
        setOpacity2();
    }
    function setOpacity2(){
        let adScale = Math.random();
        let adScale2 = Math.random();
        ad2.style.opacity = "1";
        prikol2.style.display = "block";
        prikol2.style.top = adScale * 100+"%";
        prikol2.style.right = adScale2 * 100+"%";
    }





