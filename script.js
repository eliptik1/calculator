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
function power(a, b) {
    result = Math.round((Number(a) ** Number(b)) * 10000) / 10000
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
        case "**":
            return power(a, b)
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
const btnPw = document.querySelector("#btnPw")
const btnSign = document.querySelector("#btnSign")
const modeSwitchBtn = document.querySelector("#myToggle")



let displayValue = display.textContent

let displayOperator = ""
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
let delEnabled = false
let signChanged = false

btnAdd.addEventListener("click", decideOperation)
btnSubtrack.addEventListener("click", decideOperation)
btnMultiply.addEventListener("click", decideOperation)
btnDivide.addEventListener("click", decideOperation)
btnPw.addEventListener("click", decideOperation)

function decideOperation(e) {
    decimalEnabled = true
    delEnabled = false
    override = true
    chosenOperator = e.target.getAttribute("data-text")
    displayOperator = e.target.textContent
    resultDisplay.textContent = number1 + ` ${displayOperator} `;

    if (midCalculated == false) {
        temp = chosenOperator;
        operation(previousOperator);
    }
    else if (midCalculated == true && temp == chosenOperator) {
        operation(temp);
    } else if (midCalculated == true && temp != chosenOperator) {
        temp = chosenOperator;
        operation(nextOperator);
    }
}

function operation(operator) {
    //Starting a new calculation:
    if (number1 == null && isCalculated == false) {
        number1 = Number(displayValue)
        resultDisplay.textContent = number1 + ` ${displayOperator} `
        displayValue = ""
        override = true
        previousOperator = chosenOperator
        nextOperator = chosenOperator
    }
    // check if the chosen operator is different from the previous operator
    else if (number1 != null && number2 == null && displayValue == "" && operator != temp && midCalculated == false) {
        temp = operator
        previousOperator = chosenOperator
        nextOperator = chosenOperator
    }
    // Do the next calculation using an operator without pressing the equals button:
    else if (number1 != null && number2 == null && displayValue != "") {
        number2 = Number(displayValue)
        operate(number1, operator, number2)
        resultDisplay.textContent = result + ` ${displayOperator} `
        number1 = result
        displayValue = ""
        override = true
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
    else if (number1 != null && number2 != null && displayValue == "" && operator != temp && midCalculated == true) {
        temp = operator
        previousOperator = chosenOperator
        nextOperator = chosenOperator
        midCalculated = false
    }
    else if (number2 != null && displayValue != "") {
        number2 = Number(displayValue)
        operate(number1, operator, number2)
        resultDisplay.textContent = result + ` ${displayOperator} `
        number1 = result
        displayValue = ""
        override = true
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
    // If you calculated & got the result and want to use the result for next calculations:
    else if (isCalculated && displayValue == "") {
        displayValue = ""
        number1 = result
        resultDisplay.textContent = result + ` ${displayOperator} `
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
    // If you calculated & used delete btn and want to use the new number that's on the display for next calculations:
    else if (isCalculated && displayValue != "") {
        displayValue = ""
        number1 = result
        resultDisplay.textContent = result + ` ${displayOperator} `
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
}

btnEquals.addEventListener("click", () => {
    if (!isCalculated && displayValue != "" && !delEnabled) {
        number2 = Number(displayValue)
        operate(number1, chosenOperator, number2)
        if (result != "Undefined") { display.textContent = result }
        override = true
    } else if (!isCalculated && displayValue != "" && delEnabled) {
        number2 = Number(displayValue)
        operate(number1, chosenOperator, number2)
        if (result != "Undefined") { display.textContent = result }
        delEnabled = false
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
})

function decideNumber(e) {
    if (override && decimalEnabled) {
        display.textContent = ""  // Clear the display screen
        override = false
        display.textContent += e.target.textContent

        displayValue += e.target.textContent
        isCalculated = false
    } else if (override && !decimalEnabled) {
        override = false
        display.textContent = ""
        display.textContent += "0."
        display.textContent += e.target.textContent
        displayValue += e.target.textContent
        decimalEnabled = false
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

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "9": btn9.click(); break;
        case "8": btn8.click(); break;
        case "7": btn7.click(); break;
        case "6": btn6.click(); break;
        case "5": btn5.click(); break;
        case "4": btn4.click(); break;
        case "3": btn3.click(); break;
        case "2": btn2.click(); break;
        case "1": btn1.click(); break;
        case "0": btn0.click(); break;
        case "+": btnAdd.click(); break;
        case "-": btnSubtrack.click(); break;
        case "*": btnMultiply.click(); break;
        case "/": btnDivide.click(); break;
        case "^": btnPw.click(); break;
        case ".": btnDot.click(); break;
        case "Backspace": btnDel.click(); break;
        case "Delete": btnDel.click(); break;
        case "Enter": btnEquals.click(); break;
    }
})

btnDot.addEventListener("click", () => {
    if (decimalEnabled && override && !isCalculated && !display.textContent.includes(".")) {
        display.textContent = ""
        display.textContent += "0."
        displayValue += "0."
        decimalEnabled = false
    } else if (decimalEnabled && number1 != null && !display.textContent.includes(".")) {
        display.textContent += "."
        displayValue += "."
        decimalEnabled = false
    } else if (decimalEnabled && number1 == null && displayValue == "" && !display.textContent.includes(".")) {
        display.textContent = ""
        override = false
        display.textContent = "0."
        displayValue = "0."
        decimalEnabled = false
    } else if (decimalEnabled && number1 == null && displayValue != "" && !display.textContent.includes(".")) {
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
    if (!delEnabled && number1 != null && displayValue == "") { // when you press the del btn before entering the second number
        display.textContent = "0"
        displayValue = "0"
    } else {
        override = false
        delEnabled = true
        display.textContent = display.textContent.slice(0, -1)
        displayValue = displayValue.slice(0, -1)
        if (isCalculated) {
            displayValue = result.toString().slice(0, -1) + displayValue.slice(0, -1)
        }
        if (result != null) {
            result = result.toString().slice(0, -1)
        }
    }
})

btnSign.addEventListener("click", () => {
    if (display.textContent.includes(".")) {
        decimalEnabled = true
    }
    if (!signChanged && display.textContent != "") {
        display.textContent = displayValue * (-1)
        displayValue = displayValue * (-1)
        signChanged = true
    } else if (signChanged && display.textContent != "") {
        display.textContent = displayValue * (-1)
        displayValue = displayValue * (-1)
        signChanged = false
    }
})

modeSwitchBtn.addEventListener("click", toggleDarkMode)

function toggleDarkMode() {
    const body = document.querySelector("body");
    const calculator = document.querySelector(".calculator");
    const screen = document.querySelector(".screen");
    const result = document.querySelector(".result");
    const buttons = document.querySelector(".buttons");
    const operator1 = document.querySelectorAll(".operator");


    calculator.classList.toggle("calculatorDark")
    result.classList.toggle("resultDark")
    screen.classList.toggle("screenDark")
    buttons.classList.toggle("buttonsDark")
    body.classList.toggle("bodyDark")
    operator1.forEach(node => node.classList.toggle("operatorDark"))
}