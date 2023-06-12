import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('[data-start]');
const counterDays = document.querySelector('[data-days]');
const counterHours = document.querySelector('[data-hours]');
const counterMin = document.querySelector('[data-minutes]');
const counterSec = document.querySelector('[data-seconds]');


btnStart.disabled = true;
const currentTime = new Date();

const options = {
  enableTime: true,
    time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates)
    {
      if (selectedDates[0] < currentTime) {
          Notify.warning('"Please choose a date in the future"', { timeout: 2000});
          btnStart.disabled = true
      } else {
          btnStart.disabled = false;
      }
  },
};

const inputDate = flatpickr("#datetime-picker", options);

function convertMs(ms)  {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

btnStart.addEventListener('click', onStart);

function onStart() {

    const counter = null;

    const timerId = setInterval(() => {

        const userSelectDate = inputDate.selectedDates[0];
        const currentTime = new Date();
        const counter = userSelectDate - currentTime;

        if (counter < 0) {
        clearInterval(timerId)
        return;
        };

        updateTimer(convertMs(counter));

    }, 1000);
    
    btnStart.disabled = true;
    
}

function updateTimer({ days, hours, minutes, seconds }) {
    counterDays.textContent = addLeadingZero(days);
    counterHours.textContent = addLeadingZero(hours);
    counterMin.textContent = addLeadingZero(minutes);
    counterSec.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0')
}