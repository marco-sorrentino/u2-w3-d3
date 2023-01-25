const textAreaReference = document.getElementById("text");
const saveButtonReference = document.getElementById("save-button");
const loadButtonReference = document.getElementById("load-button");
const resetButtonReference = document.getElementById("reset-button");

const reset = () => {
  textAreaReference.value = "";
};

resetButtonReference.onclick = reset;

const save = () => {
  let content = textAreaReference.value;
  localStorage.setItem("savedText", content);
  console.log("contenuto salvato!");
};

saveButtonReference.onclick = save;

const load = () => {
  let savedContent = localStorage.getItem("savedText");
  textAreaReference.value = savedContent;
};

loadButtonReference.onclick = load;
