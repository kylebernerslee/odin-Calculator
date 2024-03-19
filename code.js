const numbers = document.querySelectorAll("div.button");
const screenProgress = document.querySelector("div.screenProgress");
const screenSolution = document.querySelector("div.screenSolution");
const resultButton = document.querySelector("div.result");
const resetButton = document.querySelector("div.reset");
let calculation;

numbers.forEach((button) => {
    button.addEventListener("click", getNumber, true);
});

resultButton.addEventListener("click", getResult, true);

function getNumber() {
    if(this.innerText != "=")
        screenProgress.textContent += this.innerText;
}

function getResult() {
    calculation = screenProgress.textContent.split("+");
    screenProgress.textContent = "";
    let result = parseInt(calculation[0]) + parseInt(calculation[1]);
    screenSolution.textContent = result;

}