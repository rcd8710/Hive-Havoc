const myBee = document.getElementById("bee");
const pollen = document.getElementById("pollen");
const game = document.getElementById("Gamestart");
const moveAmount = 10;
let x = 0;
let y = 0;

function getDistanceToLeft(element) {
    const elementRect = element.getBoundingClientRect();
    const distanceToLeft = elementRect.left;
    return distanceToLeft;
}



document.addEventListener("keydown", event => {
    if (event.key === " ") {
        event.preventDefault();
        spacePressed = true;
         
        game.textContent = "Welcome to Hive Havoc! The queen bee has sent you on an urgent mission!\nPress the arrow keys to move."
    }
});

document.addEventListener("keydown", event => {
    if (spacePressed && event.key.startsWith("Arrow")) {
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
    }
});


