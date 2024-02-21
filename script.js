
function playRound() {
    const question = prompt('What is your name?');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('userimg').src = '#BAD/BROKENIMAGE' //FIX THIS
        return
}