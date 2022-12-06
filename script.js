function add(a, b) {
    //display.textContent = Number(a)+Number(b)
    result = Number(a) + Number(b)
    //number1 = result
    //number2 = null
    resultDisplay.textContent = result
    console.log("number1: " + number1)
    console.log("number2: " + number2)
    console.log("result: " + result)
    //operator = ""
}

function subtrack(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
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

let displayValue = display.textContent 
let operator = ""

let number1 = null
let number2 = null
let result = null


let override = false
let isCalculated = false

btnAdd.addEventListener("click", () => {
    operator = "+"
    
     if(isCalculated && displayValue == ""){
        number1 = result
        operate(number1, operator, number2)
        resultDisplay.textContent = result + " + "
        console.log("11111")
        isCalculated = false
    } 
    else if (isCalculated && displayValue != ""){
        number1 = result
        number2 = Number(displayValue)
        operate(number1, operator, number2)
        resultDisplay.textContent = result + " + "
        number2 = null
        displayValue = ""
        override = true
        console.log("222222")
    }
    else if (number1 == null && isCalculated == false) {
        number1 = Number(displayValue)
        resultDisplay.textContent = number1 + " + "
        displayValue = ""
        console.log("number1: " + number1)
        console.log("number2: " + number2)
        //console.log("operator: " + operator)
        console.log("result: " + result)
        override = true
        console.log("333333")
        
    } else if(number2 == null && displayValue != ""){
        number2 = Number(displayValue)
        operate(number1, operator, number2)
        resultDisplay.textContent = result + " + "
        number1 = result
        displayValue = ""
        override = true
        console.log("444444")
        isCalculated = false
   }
   else if (!isCalculated && displayValue != ""){
    number2 = Number(displayValue)
    operate(number1, operator, number2)
    resultDisplay.textContent = result + " + "
    number1 = result
    displayValue = ""
    override = true
    console.log("5555555")
    isCalculated = false
}
})

btnEquals.addEventListener("click", () => {
    if (!isCalculated && displayValue != "") {
        number2 = Number(displayValue)
        operate(number1, operator, number2)
        display.textContent = result
        number1 = null
        number2 = null
        override = true
        displayValue = ""
        isCalculated = true
        console.log("CALCULATED")
    } /* else if (isCalculated && displayValue != ""){
        number1 = result
        number2 = Number(displayValue)
        operate(number1, operator, number2)
        resultDisplay.textContent = result + " + "
        number2 = null
        displayValue = ""
        override = true
        console.log("222222")
    } */
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

