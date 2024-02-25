const myBee = document.getElementById("bee");
const pollen = document.getElementById("pollen");
const progressBarFill = document.getElementById("pfill");
const moveAmount = 10;
let x = 0;
let y = 0;

function getDistanceToLeft(element) {
    const elementRect = element.getBoundingClientRect();
    const distanceToLeft = elementRect.left;
    return distanceToLeft;
}

function checkPoll1(posx,posy){
    if(posx == -660 && posy == 0) 
        return true;
}
    

function checkHive(posx,posy) {
    if(posx == -1280 && posy == -150) 
        return true;
}
   




document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                if(x <= window.innerWidth * -1) {
                    window.location.href = "Gamescreen.html";
                }
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBee.style.transform = `translate(${x}px, ${y}px)`;
        if(checkPoll1(x,y)) {
           showProgressBar();
        }
        
    }
});

function showProgressBar() {
    // Set the width to 100% to trigger the transition
    progressBarFill.style.width = '100%';// Adjust the delay as needed
}

fun


const gamestart = document.getElementById("Gamestart");
document.addEventListener("keydown", event => {
    if(event.key === " ") {
        event.preventDefault();
        gamestart.style.visibility = "hidden";
    }
});




