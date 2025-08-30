function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Reemplazar símbolos para que funcionen en eval
    const expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
