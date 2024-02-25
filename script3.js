const myBee = document.getElementById("bee");
const pollen = document.getElementById("pollen");
const progressBarFill = document.getElementById("pfill");
const pop1 = document.getElementById("b1");
const pop2 = document.getElementById("b2");
const pop3 = document.getElementById("b3");
pop2.display.style = "none";
pop3.display.style = "none";
const moveAmount = 10;
let x = 0;
let y = 0;
let counter = 0;

function getDistanceToLeft(element) {
    const elementRect = element.getBoundingClientRect();
    const distanceToLeft = elementRect.left;
    return distanceToLeft;
}

function checkPoll1(posx, posy) {
    return posx == -660 && posy == 0;
}

function checkHive(posx, posy) {
    return posx == -1280 && posy == -150;
}

function goToGameScreen(){
    window.location.href = "Gamescreen.html"
}


document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                if (x <= window.innerWidth * -1) {
                    window.location.href = "Gamescreen.html";
                }
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBee.style.transform = `translate(${x}px, ${y}px)`;
        if (checkPoll1(x, y)) {
            showProgressBar();
        }
        if (checkHive(x, y)) {
            window.location.href = "popups.html";
        }
        
        
    }
});

function showProgressBar() {
    // Set the width to 100% to trigger the transition
    progressBarFill.style.width = '100%'; // Adjust the delay as needed
}

