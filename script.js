const myBee = document.getElementById("bee");
const pollen = document.getElementById("pollen");
const moveAmount = 10;
let x = 0;
let y = 0;

function getDistanceToLeft(element) {
    const elementRect = element.getBoundingClientRect();
    const distanceToLeft = elementRect.left;
    return distanceToLeft;
}

function checkPoll1(posx,posy){
    if(posx == -660 && posy == 0) {
        return true;
    }
    console.log(x + " " + y);
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
            window.location.href = "Homescreen.html";
        }
        
    }
});

const gamestart = document.getElementById("Gamestart");
document.addEventListener("keydown", event => {
    if(event.key === " ") {
        event.preventDefault();
        gamestart.style.visibility = "hidden";
    }
});
