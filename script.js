const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const newAlert = document.querySelector(".newAlert");
const cact = window.getComputedStyle(cactus);

document.addEventListener("keydown", function (event) {
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
    let dinoTop = window.getComputedStyle(dino).getPropertyValue("top");
    let cactusLeft = cact.getPropertyValue("left");
    if (cactusLeft < "105px" && cactusLeft > "0px" && (dinoTop == "125px" || dinoTop < "150px")) {
        newAlert.style.display = "block";
        dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        // alert("Jerzy wjebał sie w gówno!");
    }
    console.log(dinoTop);
}, 10);
