const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timeId = null;

btnStart.disabled = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStart.addEventListener('click', onStart);

function onStart() {

    timeId = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`;
        }, 1000);
    

    btnStart.disabled = true;
   
};

btnStop.addEventListener('click', onStop);

function onStop() {
    clearInterval(timeId);

    btnStart.disabled = false;
};
