const screen = document.getElementById("screen");

function display(value) {
  if (screen.innerHTML === "0" || screen.innerHTML === "Error") {
    screen.innerHTML = "";
  }
  screen.innerHTML += value;
}

function clearLastDigit() {
  screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
}

function allClear() {
  screen.innerHTML = 0;
}

function calculate() {
  try {
    screen.innerHTML = eval(screen.innerHTML);
  } catch (error) {
    screen.innerHTML = "Error";
  }
}
