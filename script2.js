const myBee = document.getElementById("bee");
const progressBarFill = document.getElementById("pfill");
const inst = document.getElementById("instructions")
const pop1 = document.getElementById("b1");
const pop2 = document.getElementById("b2");
const pop3 = document.getElementById("b3");

const moveAmount = 10;
let x = 0;
let y = 0;
let counter = getCounterValue();

function getCounterValue() {
    return parseInt(localStorage.getItem('counter')) || 0;
}

function setCounterValue(value) {
    localStorage.setItem('counter', value);
}

function checkPoll1(posx, posy) {
    return posx == -660 && posy == 0;
}

function checkHive(posx, posy) {
    
    if ((posx == -1280 && posy == -150) && progressBarFill.style.width == '100%')
        return true;
    else if(posx == -1280 && posy == -150)
        inst.textContent = " Collect enough pollen! "

    
}


function showProgressBar() {
    progressBarFill.style.width = '100%';
}

function goToPop(url) {
    window.location.href = url;
}



function goToGameScreen() {
   
    window.location.href = "Gamescreen.html";
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
                    goToGameScreen();
                }
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBee.style.transform = `translate(${x}px, ${y}px)`;
        if (checkPoll1(x, y)) {
            showProgressBar();
            pollen.style.visibility = "hidden";
        }
        if (checkHive(x, y) && counter === 0) {
            counter++;
            
            setCounterValue(counter);
           
            goToPop("popups.html");
        } else if (checkHive(x, y) && counter === 1) {
            counter++;
            setCounterValue(counter);
            
            goToPop("popups2.html");
        } else if (checkHive(x, y) && counter === 2) {
            counter++;
            setCounterValue(counter);
            
            goToPop("popups3.html");
            
        }
        else if (checkHive(x, y) && counter === 3){
            counter++;
            setCounterValue(counter);
            goToPop("popups4.html");
            goToGameScreen();
        }
        else{
            
            localStorage.setItem('counter', 0);
        }
    }
});

const gamestart = document.getElementById("Gamestart");
document.addEventListener("keydown", event => {
    if (event.key === " ") {
        event.preventDefault();
        gamestart.style.visibility = "hidden";
    }
});
