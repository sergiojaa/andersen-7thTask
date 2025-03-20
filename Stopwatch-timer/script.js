let stopwatchInterval;
let stopwatchTime = 0;
let isStopwatchRunning = false;

const stopwatchDisplay = document.getElementById("stopwatch");
const startStopwatchBtn = document.getElementById("startStopwatch");
const stopStopwatchBtn = document.getElementById("stopStopwatch");
const resetStopwatchBtn = document.getElementById("resetStopwatch");

function updateStopwatch() {
    let hours = Math.floor(stopwatchTime / 3600);
    let minutes = Math.floor((stopwatchTime % 3600) / 60);
    let seconds = stopwatchTime % 60;
    stopwatchDisplay.textContent =
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startStopwatchBtn.addEventListener("click", () => {
    if (!isStopwatchRunning) {
        isStopwatchRunning = true;
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatch();
        }, 1000);
    }
});

stopStopwatchBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    isStopwatchRunning = false;
});

resetStopwatchBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    isStopwatchRunning = false;
    stopwatchTime = 0;
    updateStopwatch();
});

let timerInterval;
let timerTime = 0;

const timerInput = document.getElementById("timerInput");
const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimer");
const resetTimerBtn = document.getElementById("resetTimer");
const timeButtons = document.querySelectorAll(".time-btn");

function updateTimer() {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startTimerBtn.addEventListener("click", () => {
    if (timerTime === 0) {
        let inputTime = parseInt(timerInput.value);
        if (!isNaN(inputTime) && inputTime > 0) {
            timerTime = inputTime;
            updateTimer();
        }
    }
    if (timerTime > 0) {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (timerTime > 0) {
                timerTime--;
                updateTimer();
            } else {
                clearInterval(timerInterval);
                alert("Time's up!");
            }
        }, 1000);
    }
});

resetTimerBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerTime = 0;
    updateTimer();
});

timeButtons.forEach(button => {
    button.addEventListener("click", () => {
        let additionalTime = parseInt(button.getAttribute("data-time"));
        timerTime += additionalTime;
        updateTimer();
    });
});

updateStopwatch();
updateTimer();
