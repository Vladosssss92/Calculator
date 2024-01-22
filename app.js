let firstNum = ""; // первая переменная
let secondNum = "";
let operator = "";
let resultBtn = "";

document.querySelector(".buttonAC").onclick = clear;
document.querySelector(".resultBtn").onclick = calculate;
document.querySelectorAll(".num").forEach((btn) => (btn.onclick = pressNumber));
document.querySelectorAll(".operation").forEach((btn) => (btn.onclick = operation));

function clear() {
  firstNum = "";
  secondNum = "";
  operator = "";
  resultBtn = "";
  result.value = "";
}

function pressNumber() {
  if (firstNum == "") {
    result.value += this.innerHTML;
  } else if (!!firstNum && !!operator && !secondNum) {
    if (result.value === operator) {
      result.value = this.innerHTML;
    } else {
      result.value += this.innerHTML;
    }
  }
}

function operation() {
  if (!operator) {
    firstNum = result.value;
    result.value = this.innerHTML;
    operator = this.innerHTML;
  } else {
    operator = this.innerHTML;
    result.value = this.innerHTML;
  }
}

function calculate() {
  if (!!firstNum && !!operator && !!+result.value) {
    secondNum = result.value;
    result.value = eval(`${firstNum} ${operator} ${secondNum}`);
  }
  if (!firstNum && !!result.value && !secondNum && !operator) {
    result.value = eval(`${result.value}`);
  }
}
