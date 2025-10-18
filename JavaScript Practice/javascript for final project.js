const bells = new Audio("./sounds/bell.wav");
const startBtn = document.querySelector(".btn-start");
const session = document.querySelector(".minutes");

let myInterval;
let totalSeconds;
let state = true;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    totalSeconds = sessionAmount * 60;

    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert("Session has already started.");
  }
};

const updateSeconds = () => {
  const minuteDiv = document.querySelector(".minutes");
  const secondDiv = document.querySelector(".seconds");

  totalSeconds--;

  const minutesLeft = Math.floor(totalSeconds / 60);
  const secondsLeft = totalSeconds % 60;

  // Format seconds to always show 2 digits
  secondDiv.textContent = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  minuteDiv.textContent = `${minutesLeft}`;

  // When timer hits 0
  if (minutesLeft === 0 && secondsLeft === 0) {
    bells.play();
    clearInterval(myInterval);
    state = true; // reset so you can start again
  }
};

startBtn.addEventListener("click", appTimer);
