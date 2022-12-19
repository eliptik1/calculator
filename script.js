function add(a, b) {
    result = Math.round((Number(a) + Number(b)) * 10000) / 10000
    resultDisplay.textContent = result
}

function subtrack(a, b) {
    result = Math.round((Number(a) - Number(b)) * 10000) / 10000
    resultDisplay.textContent = result
}

function multiply(a, b) {
    result = Math.round((Number(a) * Number(b)) * 10000) / 10000
    resultDisplay.textContent = result
}

function divide(a, b) {
    if (b == "0") {
        result = "Undefined"
        resultDisplay.textContent = "Undefined :)"
        display.textContent = ":)"
    } else {
        result = Math.round((Number(a) / Number(b)) * 10000) / 10000
        resultDisplay.textContent = result
    }
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
const btnDot = document.querySelector("#btnDot")
const btnDel = document.querySelector("#btnDel")



let displayValue = display.textContent

let previousOperator = ""
let nextOperator = ""
let chosenOperator = ""
let temp = ""

let number1 = null
let number2 = null
let result = null

let override = false
let isCalculated = false
let midCalculated = false

let decimalEnabled = true
delEnabled = false

btnAdd.addEventListener("click", decideOperation)
btnSubtrack.addEventListener("click", decideOperation)
btnMultiply.addEventListener("click", decideOperation)
btnDivide.addEventListener("click", decideOperation)

function decideOperation(e) {
    decimalEnabled = true
    delEnabled = false
    override = true
    chosenOperator = e.target.textContent
    resultDisplay.textContent = number1 + ` ${chosenOperator} `;
    if (midCalculated == false && temp == chosenOperator) {
        //console.log("A")
        temp = chosenOperator;
        operation(previousOperator);
    } else if (midCalculated == false && temp != chosenOperator) {
        //console.log("B")
        temp = chosenOperator;
        operation(previousOperator);
    }
    else if (midCalculated == true && temp == chosenOperator) {
        //console.log("C")
        operation(temp);
    } else if (midCalculated == true && temp != chosenOperator) {
        //console.log("D")
        temp = chosenOperator;
        operation(nextOperator);
    }
}

function operation(operator) {
    //Starting a new calculation:
    if (number1 == null && isCalculated == false) {
        //console.log("11111111")
        number1 = Number(displayValue)
        resultDisplay.textContent = number1 + ` ${chosenOperator} `
        displayValue = ""
        override = true
        previousOperator = chosenOperator
        nextOperator = chosenOperator
    }
    // check if the chosen operator is different from the previous operator
    else if (number1 != null && number2 == null && displayValue == "" && operator != temp && midCalculated == false) {
        //console.log("changed")
        temp = operator
        previousOperator = chosenOperator
        nextOperator = chosenOperator
    }
    // Do the next calculation using an operator without pressing the equals button:
    else if (number1 != null && number2 == null && displayValue != "") {
        //console.log("22222222")
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
    else if (number1 != null && number2 != null && displayValue == "" && operator != temp && midCalculated == true) {
        //console.log("changed 2")
        temp = operator
        previousOperator = chosenOperator
        nextOperator = chosenOperator

        midCalculated = false
    }
    else if (number2 != null && displayValue != "") {
        //console.log("3333333")
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
        //console.log("5555555")
        number1 = result
        resultDisplay.textContent = result + ` ${chosenOperator} `
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
}

btnEquals.addEventListener("click", () => {
    if (!isCalculated && displayValue != "" && !delEnabled) {
        number2 = Number(displayValue)
        operate(number1, chosenOperator, number2)
        if (result != "Undefined") {
            display.textContent = result
        }
        number1 = null
        number2 = null
        override = true
        displayValue = ""
        isCalculated = true
        midCalculated = false
        previousOperator = ""
        nextOperator = ""
        chosenOperator = "+"
        decimalEnabled = true
    } else if (!isCalculated && displayValue != "" && delEnabled) {
        number2 = Number(displayValue)
        operate(number1, chosenOperator, number2)
        if (result != "Undefined") {
            display.textContent = result
        }
        number1 = null
        number2 = null
        displayValue = ""
        isCalculated = true
        midCalculated = false
        previousOperator = ""
        nextOperator = ""
        chosenOperator = "+"
        decimalEnabled = true
    }
})

function decideNumber(e) {

    if (override && decimalEnabled) {
        display.textContent = ""  // Clear the display screen
        override = false
        display.textContent += e.target.textContent
        displayValue += e.target.textContent
        isCalculated = false
        console.log("A")
    } else if (override && !decimalEnabled) {
        override = false
        display.textContent = ""
        display.textContent += "0."
        display.textContent += e.target.textContent
        displayValue += e.target.textContent
        decimalEnabled = false
        console.log("B")
    } else {
        display.textContent += e.target.textContent
        displayValue += e.target.textContent
        isCalculated = false
        console.log("C")
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

btnDot.addEventListener("click", () => {
    if (decimalEnabled && override && !isCalculated) {
        display.textContent = ""
        display.textContent += "0."
        displayValue += "0."
        decimalEnabled = false
    } else if (decimalEnabled && number1 != null) {
        display.textContent += "."
        displayValue += "."
        decimalEnabled = false
    } else if (decimalEnabled && number1 == null && displayValue == "") {
        display.textContent = ""  // Clear the display screen
        override = false
        display.textContent = "0."
        displayValue = "0."
        isCalculated = false
    } else if (decimalEnabled && number1 == null && displayValue != "") {
        display.textContent += "."
        displayValue += "."
        decimalEnabled = false
    }
})

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
    decimalEnabled = true
    previousOperator = ""
    nextOperator = ""
    chosenOperator = "+"
})

btnDel.addEventListener("click", () => {
    override = false
    delEnabled = true
    display.textContent = display.textContent.slice(0, -1)
    displayValue = displayValue.slice(0, -1)
    if (result != null) {
        result = result.toString().slice(0, -1)
    }
})
