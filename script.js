let dino = document.getElementById("dino");
let cactus = document.getElementById("catus");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 500);
}

var isAlive = setInterval(function () {
    // if (!dino || !cactus) {
    //     return false;
    // }
    var dinoTop = parseInt(
        document.getComputedStyle(dino).getPropertyValue("top")
    );
    var cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130) {
        dino.style.animation = "none";
        cactus.style.animation = "none";
        alert("Jerzy wjebał sie w gówno!");
    } 
}, 10);
