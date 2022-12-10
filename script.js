function add(a, b) {
    result = Number(a) + Number(b)
    resultDisplay.textContent = result
    console.log("number1: " + number1)
    console.log("number2: " + number2)
    console.log("result: " + result)
}

function subtrack(a, b) {
    result = Number(a) - Number(b)
    resultDisplay.textContent = result
    console.log("number1: " + number1)
    console.log("number2: " + number2)
    console.log("result: " + result)
}

function multiply(a, b) {
    result = Number(a) * Number(b)
    resultDisplay.textContent = result
    console.log("number1: " + number1)
    console.log("number2: " + number2)
    console.log("result: " + result)
}

function divide(a, b) {
    result = Number(a) / Number(b)
    resultDisplay.textContent = result
    console.log("number1: " + number1)
    console.log("number2: " + number2)
    console.log("result: " + result)
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
let chosenOperator =""

let number1 = null
let number2 = null
let result = null


let override = false
let isCalculated = false
let midCalculated = false

btnAdd.addEventListener("click", () => {
    chosenOperator = "+"
    if (midCalculated == false) { 
        operation(previousOperator)
    } else if(midCalculated == true) {
        operation(nextOperator)
    }
} 
)

btnSubtrack.addEventListener("click", () => {
    chosenOperator = "-"
    if (midCalculated == false) {
        operation(previousOperator)
    } else if(midCalculated == true ) {
        operation(nextOperator)
    }
})

btnMultiply.addEventListener("click", () => {
    chosenOperator = "*"
    if (midCalculated == false) {
        operation(previousOperator)
    } else if(midCalculated == true) {
        operation(nextOperator)
    }
})

btnDivide.addEventListener("click", () => {
    chosenOperator = "/"
    if (midCalculated == false) {
        operation(previousOperator)
    } else if(midCalculated == true) {
        operation(nextOperator)
    }
})

function operation(operator) {
    
    //Starting a new calculation:
    if (number1 == null && isCalculated == false) {
        number1 = Number(displayValue)
        resultDisplay.textContent = number1 + ` ${chosenOperator} `
        displayValue = ""
        console.log("number1: " + number1)
        console.log("number2: " + number2)
        console.log("result: " + result)
        override = true
        console.log("111111")
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
        console.log("222222")
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
        console.log("333333")
        isCalculated = false
        midCalculated = true
        nextOperator = chosenOperator
    }
    // If you calculated & got the result and want to use the result for next calculations:
    else if (isCalculated && displayValue == "") {
        number1 = result
        resultDisplay.textContent = result + ` ${chosenOperator} `
        console.log("444444")
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
        console.log("CALCULATED")
    }
})

btn9.addEventListener("click", () => {
    if (override) {
        display.textContent = ""  // Clear the display screen
        override = false
        display.textContent += 9
        displayValue += "9"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 9
        displayValue += "9"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn8.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 8
        displayValue += "8"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 8
        displayValue += "8"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn7.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 7
        displayValue += "7"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 7
        displayValue += "7"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn6.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 6
        displayValue += "6"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 6
        displayValue += "6"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn5.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 5
        displayValue += "5"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 5
        displayValue += "5"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn4.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 4
        displayValue += "4"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 4
        displayValue += "4"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn3.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 3
        displayValue += "3"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 3
        displayValue += "3"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn2.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 2
        displayValue += "2"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 2
        displayValue += "2"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn1.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 1
        displayValue += "1"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 1
        displayValue += "1"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})

btn0.addEventListener("click", () => {
    if (override) {
        display.textContent = ""
        override = false
        display.textContent += 0
        displayValue += "0"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    } else {
        display.textContent += 0
        displayValue += "0"
        console.log("displayValue:" + displayValue)
        isCalculated = false
    }
})


btnAC.addEventListener("click", () => {
    display.textContent = ""
    displayValue = ""
})

