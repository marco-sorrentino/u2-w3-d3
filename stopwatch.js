let seconds = parseInt(sessionStorage.getItem("lastCounterValue1")) || 00;
let tens = parseInt(sessionStorage.getItem("lastCounterValue")) || 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");
let Interval;

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});

buttonStop.addEventListener("click", () => {
  clearInterval(Interval);

  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});

buttonReset.addEventListener("click", () => {
  clearInterval(Interval);
  tens = 00;
  seconds = 00;
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});

const startTimer = () => {
  tens++;
  sessionStorage.setItem("lastCounterValue", tens);
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    sessionStorage.setItem("lastCounterValue2", seconds);
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
};
