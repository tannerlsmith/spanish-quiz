var highScoreArray;

if (localStorage.getItem('form') === null) {
    highScoreArray = [] 
} else {
    highScoreArray = JSON.parse(localStorage.getItem('form'))
}
console.log(highScoreArray)
var saveScores = document.getElementById('show-highscores')

var orderedList = document.createElement('ol')

for (var i = 0; i < highScoreArray.length; i++) {
    console.log(highScoreArray[i])
    var listElement = document.createElement('li')
    listElement.textContent = 'Initials: ' + highScoreArray[i].initials + ' ' + 'Points: ' + highScoreArray[i].points
    orderedList.appendChild(listElement)
}

saveScores.appendChild(orderedList)