const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");
const yearContainer = document.querySelector("#year");
const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
const loading = document.querySelector("#loading");
const countdown = document.querySelector("#countdown");

yearContainer.textContent = nextYear;

const inserttimeunit = (unit) => (unit < 10 ? "0" + unit : unit);

const updateCountdown = () => {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  secondsContainer.textContent = inserttimeunit(seconds);
  minutesContainer.textContent = inserttimeunit(minutes);
  hoursContainer.textContent = inserttimeunit(hours);
  daysContainer.textContent = inserttimeunit(days);
};

// setTimeout(() => {
//   loading.remove();
//   countdown.style.display = "flex";
// }, 1000);

setInterval(updateCountdown, 1000);
