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
    console.log("value gotten: " + this.innerText);
    if(this.innerText == "=")
    {

    }
    else if(!["+", "-", ":", "*"].includes(this.innerText))
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


    console.log("n1:" + number1, "op:" + operator, "n2:"+number2);

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
            calculation = number1 - number2;
            console.log(calculation);
            break;
        case "*":
            calculation = number1 * number2;
            console.log(calculation);
            break;
        case ":":
            calculation = number1 / number2;
            console.log(calculation);
            break;
    }
    
    number1 = "";
    number2 = "";
    operator = "";
    screenProgress.innerText = "";
    screenSolution.innerText = calculation;
}
