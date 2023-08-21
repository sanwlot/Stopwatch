const startButton = document.querySelector('.start-button')
const resetButton = document.querySelector('.reset-button')
const stopwatch = document.querySelector('.stopwatch')
let count = 0
let isStopped = false

let stopwatchId 
startButton.addEventListener('click', () => {
    if (!isStopped) {
        startButton.textContent = 'Stop'
        stopwatchId = setInterval(incrementCounter, 1000);
        isStopped = true
    } else {
        startButton.textContent = 'Start'
        clearInterval(stopwatchId)
        isStopped = false
    }
})

resetButton.addEventListener('click', resetCounter)

function incrementCounter() {
    stopwatch.textContent = `${count++}s`
}

function resetCounter() {
    clearInterval(stopwatchId)
    stopwatch.textContent = `0s`
    startButton.textContent = 'Start'
    count = 0
    isStopped = false
}
