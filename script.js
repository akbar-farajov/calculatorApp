const num = document.querySelectorAll('button.num')
const clearKey = document.querySelector('button.clear')
const display = document.querySelector('input')

function appendToDisplay(input) {
    display.value += input
}

function calculate() {
    try {
        display.value = eval(display.value)
    } catch (err) {
        display.value = 'Error'
    }
}

clearKey.addEventListener('click', () => {
    display.value = ''
})
