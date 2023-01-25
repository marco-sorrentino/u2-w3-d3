const displayTime = document.getElementById("displayTime");
const start = document.getElementById("start");
let count = parseInt(sessionStorage.getItem("counterValue")) || 0;

const increaseCounter = () => {
  setInterval(() => {
    displayTime.innerHTML = count;
    sessionStorage.setItem("counterValue", count);
    count++;
  }, 1000);
};

start.onclick = increaseCounter;
