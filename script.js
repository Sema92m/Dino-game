const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const alert = document.querySelector(".alert");

//с этим участком работает пробел на версии мобильной
const touchedElement = document.getElementById("body");
touchedElement.addEventListener("touchstart", funcTouchStart, false);
function funcTouchStart() {
    jump();
}
//^


document.addEventListener("keypress", function (event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 1000);
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
    if (cactusLeft <= 70 && dinoTop > 110 && cactusLeft > 20) {
        alert.style.display = "block";
        dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        // clearInterval(setTime);
    }
}, 10);

let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = (totalSeconds % 60) + "";
}

// function myStopFunction() {
//     clearInterval(setTime);
// }



function startup() {
    var el = document.querySelector("body");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
  }
