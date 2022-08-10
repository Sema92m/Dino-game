const dino = document.getElementById("dino");
const cactus = document.getElementById("catus");
const dino1 = document.querySelector("dino1");
const cactus1 = document.querySelector("cactus1");

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


let isAlive = setInterval(function () {
	if(!dino ||  !cactus) { 

		return false;
	
	} 
    let dinoTop = parseInt(
        document .getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );



	
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 220) {
        // dino.style.animation = "none";
        // cactus.style.animation = "none";
        alert("Jerzy wjebał sie w gówno!");
    }
}, 10); 
