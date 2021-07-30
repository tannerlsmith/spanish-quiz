// Timer variables
var beginButtonEl = document.querySelector('#start-btn')
const timerEl = document.getElementById('timer')
var timeLeft = 60;
var timerId;



// Function to begin clock
function countdown() {
    timeLeft--;
    timerEl.innerText = "Time Remaining: " + timeLeft
    timerId = setInterval(countdown, 1000)
    if (timeLeft <= 0) {
        clearInterval(timerId)
    }
}

beginButtonEl.addEventListener('click', countdown);
