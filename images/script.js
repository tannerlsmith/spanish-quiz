
object.addEventListener('btn', checkAnswers())

function checkAnswers() {
    var str = 'Hello World'
    var result = str.fontcolor('red')
    document.getElementById('tf-display').innerHTML = result
}
