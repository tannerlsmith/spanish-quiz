// Timer variables
const timerEl = document.getElementById('timer')
var beginButtonEl = document.querySelector('#start-btn')
var questionSection = document.querySelector('.exam-sheet')
var timeLeft = 10;
var timerId;
var index = 0;

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
    {
        question: 'Test Complete',
        choices: [
            'View Grade'
        ]
    }
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

function checkAnswer() {
    console.log(this.innerHTML)
    if (this.innerHTML === questionsLink[index].answers) {
        console.log('correct')
    } else {console.log('incorrect')} 

    index++
    showNextQuestion(index)
}
