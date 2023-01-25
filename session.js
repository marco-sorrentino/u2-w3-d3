// session storage è una memoria a breve termine, tutto il contenuto viene svuotato
// ogni volta che si chiude tab o finestra

const paragraphReference = document.getElementById("counter");
const buttonReference = document.getElementById("increaseButton");

let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

const assignCounterToDom = () => {
  paragraphReference.innerText = counterValue;
};

assignCounterToDom();

const increaseCounter = () => {
  counterValue++;
  sessionStorage.setItem("lastCounterValue", counterValue);
  assignCounterToDom();
};

buttonReference.onclick = increaseCounter;
