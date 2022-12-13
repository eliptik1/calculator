function add(a, b) {
    result = Math.round((Number(a) + Number(b))*10000)/10000
    resultDisplay.textContent = result
}

function subtrack(a, b) {
    result = Math.round((Number(a) - Number(b))*10000)/10000
    resultDisplay.textContent = result
}

function multiply(a, b) {
    result = Math.round((Number(a) * Number(b))*10000)/10000
    resultDisplay.textContent = result
}

function divide(a, b) {
    result = Math.round((Number(a) / Number(b))*10000)/10000
    resultDisplay.textContent = result
}

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b)
            break;
        case "-":
            return subtrack(a, b)
            break;
        case "*":
            return multiply(a, b)
            break;
        case "/":
            return divide(a, b)
            break;
    }
}

const display = document.querySelector(".screen")
const resultDisplay = document.querySelector(".result")

const btn9 = document.querySelector("#btn9")
const btn8 = document.querySelector("#btn8")
const btn7 = document.querySelector("#btn7")
const btn6 = document.querySelector("#btn6")
const btn5 = document.querySelector("#btn5")
const btn4 = document.querySelector("#btn4")
const btn3 = document.querySelector("#btn3")
const btn2 = document.querySelector("#btn2")
const btn1 = document.querySelector("#btn1")
const btn0 = document.querySelector("#btn0")
const btnAC = document.querySelector("#btnAC")
const btnEquals = document.querySelector("#btnEquals")
const btnAdd = document.querySelector("#btnAdd")
const btnSubtrack = document.querySelector("#btnSubtrack")
const btnMultiply = document.querySelector("#btnMultiply")
const btnDivide = document.querySelector("#btnDivide")


let displayValue = display.textContent

let previousOperator = ""
let nextOperator = ""
let chosenOperator = ""
let operatorSwitched = false

let number1 = null
let number2 = null
let result = null


let override = false
let isCalculated = false
let midCalculated = false

let temp = "+"

function decideOperation(e) {
    chosenOperator = e.target.textContent
  
    resultDisplay.textContent = number1 + ` ${chosenOperator} `;
    if (midCalculated == false && temp == chosenOperator) {
      operation(temp);
    } else if (midCalculated == false && temp != chosenOperator) {
      temp = chosenOperator;
      operation(previousOperator); 
    } else if (midCalculated == true) {
      operation(nextOperator);
    }
}

btnAdd.addEventListener("click", decideOperation)

btnSubtrack.addEventListener("click", decideOperation)

btnMultiply.addEventListener("click", decideOperation)

btnDivide.addEventListener("click", decideOperation)

function operation(operator) {

    //Starting a new calculation:
    if (number1 == null && isCalculated == false) {
        number1 = Number(displayValue)
        resultDisplay.textContent = number1 + ` ${chosenOperator} `
        displayValue = ""
        override = true
        previousOperator = chosenOperator
        nextOperator = chosenOperator
    }
    // Do the next calculation using an operator without pressing the equals button:
    else if (number2 == null && displayValue != "") {
        number2 = Number(displayValue)
        operate(number1, operator, number2)
        resultDisplay.textContent = result + ` ${chosenOperator} `
        number1 = result
        displayValue = ""
        override = true
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
    // Continue to next calculations using an operator without pressing the equals button:
    else if (!isCalculated && displayValue != "") {
        number2 = Number(displayValue)
        operate(number1, operator, number2)
        resultDisplay.textContent = result + ` ${chosenOperator} `
        number1 = result
        displayValue = ""
        override = true
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
    // If you calculated & got the result and want to use the result for next calculations:
    else if (isCalculated && displayValue == "") {
        number1 = result
        resultDisplay.textContent = result + ` ${chosenOperator} `
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
}

btnEquals.addEventListener("click", () => {
    if (!isCalculated && displayValue != "") {
        number2 = Number(displayValue)
        operate(number1, chosenOperator, number2)
        display.textContent = result
        number1 = null
        number2 = null
        override = true
        displayValue = ""
        isCalculated = true
        midCalculated = false
        previousOperator = ""
        nextOperator = ""
        chosenOperator = "+"
    }
})

function decideNumber(e){
    if (override) {
        display.textContent = ""  // Clear the display screen
        override = false
        display.textContent += e.target.textContent
        displayValue += e.target.textContent
        isCalculated = false
    } else {
        display.textContent += e.target.textContent
        displayValue += e.target.textContent
        isCalculated = false
    }
}

btn9.addEventListener("click", decideNumber)
btn8.addEventListener("click", decideNumber)
btn7.addEventListener("click", decideNumber)
btn6.addEventListener("click", decideNumber)
btn5.addEventListener("click", decideNumber)
btn4.addEventListener("click", decideNumber)
btn3.addEventListener("click", decideNumber)
btn2.addEventListener("click", decideNumber)
btn1.addEventListener("click", decideNumber)
btn0.addEventListener("click", decideNumber)


btnAC.addEventListener("click", () => {
    resultDisplay.textContent = ""
    display.textContent = ""
    displayValue = ""
    number1 = null
    number2 = null
    result = null
    override = false
    isCalculated = false
    midCalculated = false
    previousOperator = ""
    nextOperator = ""
    chosenOperator = "+"
})

