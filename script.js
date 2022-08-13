const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const alert = document.querySelector(".alert");
const btn = document.querySelector(".btn_refresh");

//с этим участком работает touch на версии мобильной
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
        btn.style.display = "block";
        clearInterval(timer);
    }
}, 10);

//Timer
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let timer = setInterval(setTime, 1000);
function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = (totalSeconds % 60) + "";
}

