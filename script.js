let timer;
let startTime = 0;
const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = startTime;
}

// Starting the timer

function startTimer() {
    if (startTime < 30) {
        timer = setInterval(() => {
            if (startTime < 30) {
                startTime += 3;
                updateDisplay();
            } else {
                clearInterval(timer);
            }
        }, 3000);
    }
}

// Stopping the timer


function stopTimer() {
    clearInterval(timer);
}

// Reseting the timer


function resetTimer() {
    clearInterval(timer);
    startTime = 0;
    updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

updateDisplay();