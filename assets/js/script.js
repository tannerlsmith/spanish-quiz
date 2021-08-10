// Timer variables
const timerEl = document.getElementById('timer')
var beginButtonEl = document.querySelector('#start-btn')
var questionSection = document.querySelector('.exam-sheet')
var timeLeft = 20;
var timerId;
var index = 0;
var subtTime = 2;
var points = 0;

var questionsLink = [
    {
        question: 'question1',
        choices: [
            'choice 1', 
            'choice 2',
            'choice 3', 
            'choice 4'
        ],
        answers: 'choice 2'
    },
    {
        question: 'question2',
        choices: [
            'choice 1',
            'choice 2',
            'choice 3', 
            'choice 4'
        ],
        answers: 'choice 3'
    },
    {
        question: 'question3',
        choices: [
            'choice 1',
            'choice 2',
            'choice 3', 
            'choice 4'
        ],
        answers: 'choice 4'
    },
]

// Check answer variables
var checkAnswerOneEl = document.querySelector('#answer-one-btn')
const hiddenAnswer = document.getElementById('#js-ans')

// Function to begin clock
function countdown() {
    timeLeft--;
    timerEl.innerText = "Time Remaining: " + timeLeft
    if (timeLeft <= 0) {
        clearInterval(timerId)
    }
}

beginButtonEl.addEventListener('click', function() {
    timerEl.innerText = "Time Remaining: " + timeLeft;
    // set the timer, calls the countdown and runs it every second. 
    timerId = setInterval(countdown, 1000)
    showNextQuestion(index)
});

function showNextQuestion(index) {
    questionSection.innerHTML = ''

    var h1El = document.createElement('h1');
    h1El.innerText = questionsLink[index].question;
    questionSection.appendChild(h1El);

    var buttonOne = document.createElement('button')
    var buttonTwo = document.createElement('button')
    var buttonThree = document.createElement('button')
    var buttonFour = document.createElement('button')

    buttonOne.innerText = questionsLink[index].choices[0]
    buttonTwo.innerText = questionsLink[index].choices[1]
    buttonThree.innerText = questionsLink[index].choices[2]
    buttonFour.innerText = questionsLink[index].choices[3]

    buttonOne.addEventListener('click', checkAnswer)
    buttonTwo.addEventListener('click', checkAnswer)
    buttonThree.addEventListener('click', checkAnswer)
    buttonFour.addEventListener('click', checkAnswer)

    questionSection.appendChild(buttonOne)
    questionSection.appendChild(buttonTwo)
    questionSection.appendChild(buttonThree)
    questionSection.appendChild(buttonFour)
}

// Needs to be updated to add grade to localStoarge
function checkAnswer() {
    console.log(this.innerHTML)
    if (this.innerHTML === questionsLink[index].answers) {
        // add points
        points++; 

    } else {timeLeft = timeLeft - 2}

    if (index + 1 === questionsLink.length) {
        clearInterval(timerId)
        endQuiz()
    } else {
        index++
        showNextQuestion(index)
    }
}

function endQuiz() {
    questionSection.style.display = 'none'

    var showEndQuiz = document.querySelector('.end-quiz');
    showEndQuiz.style.display = 'block' 

    var showScore = document.getElementById('show-score')
    showScore.innerText = 'This is your grade: ' + points + '/3'

    var localStorageButton = document.getElementById('enter-highscores')
    localStorageButton.addEventListener('click', function() {
        var saveInitials = document.getElementById('save-initials').value;
        console.log(saveInitials)

        // clearForm
        // add it to local storage
        
    })
}

localStorage.setItem('Hello', 5)

var answer = localStorage.getItem('Hello')
console.log(answer)

// How to save the initials + user score.
// How to save an array of objects with inital & score