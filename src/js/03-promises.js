import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
 if (shouldResolve) {
   resolve({ position, delay })
      } else {
   reject({ position, delay })
      }
    }, delay)
 },);
}; 

const form = document.querySelector('.form');
const inputDelay = form.querySelector('input[name=delay]');
const inputStep = form.querySelector('input[name=step]');
const inputAmount = form.querySelector('input[name=amount]');

form.addEventListener('click', onStart);

let delay;

function onStart(e) {
  e.preventDefault();

  const quantityProm = inputAmount.value;
  const delayCreateProm = inputDelay.value;
  const stepDelay = inputStep.value;


  for (let i = 1; i <= quantityProm; i++) {

    if (i === 1) {
      delay = Number(delayCreateProm);
    }
    else {
      delay += Number(stepDelay);
    }
    
    createPromise(i, delay).then(onSuccess).catch(onError);

    e.currentTarget.reset();
  };
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  };

