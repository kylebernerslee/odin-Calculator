const numbers = document.querySelectorAll("div.button");
const screenProgress = document.querySelector("div.screenProgress");
const screenSolution = document.querySelector("div.screenSolution");
const resultButton = document.querySelector("div.result");
const resetButton = document.querySelector("div.reset");
let calculation;
let number1 = "";
let number2 = "";
let operator = "";

numbers.forEach((button) => {
    button.addEventListener("click", getValue, true);
});

resultButton.addEventListener("click", getResult, true);

function getValue() {
    //debugger;
    screenProgress.innerText += this.innerText;
    console.log(this.innerText);
    if(this.innerText != "+" && "-" && ":" && "/")
    {
        if(operator != "")
        {
            number2 += this.innerText;
        }
        else
        {
            number1 += this.innerText;
        }
    }
    else
    {
        if(operator != "")
        {

        }
        else
        {
            operator += this.innerText;
            console.log("this operator:"+operator);
        }
    }


    console.log(number1, number2, operator);

}

function getResult() {

    number1 = parseInt(number1);
    number2 = parseInt(number2);
    
    switch (operator) {
        case "+":
            calculation = number1 + number2;
            console.log(calculation);
            break;
        case "-":
            break;
        case "*":
            break;
        case "/":
            break;
    }
    
    number1 = "";
    number2 = "";
    operator = "";
    screenProgress.innerText = "";
    screenSolution.innerText = calculation;
}

function add (num1, num2)
{
    return parseInt(num1) + parseInt(num2);
}

function subtract (num1, num2)
{
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2)
{
    return parseInt(num1) * parseInt(num2);
}

function subtract(num1, num2)
{
    return parseInt(num1) / parseInt(num2);
}
