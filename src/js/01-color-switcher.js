const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector('body')

console.log(startBtn)
console.log(stopBtn)
console.log(body)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.setAttribute('disabled', true)

startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled')
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', true)
});

