function add(a, b) {
    return a + b
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
        default:
            return add(a, b)
            break;
    }
}

const display = document.querySelector(".screen")


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

let displayValue = ""

btn9.addEventListener("click", ()=> {
    display.textContent += 9
    displayValue += "9"
})

btn8.addEventListener("click", ()=> {    
    display.textContent += 8
    displayValue += "8"
})

btn7.addEventListener("click", ()=> {    
    display.textContent += 7
    displayValue += "7"
})

btn6.addEventListener("click", ()=> {    
    display.textContent += 6
    displayValue += "6"
})

btn5.addEventListener("click", ()=> {    
    display.textContent += 5
    displayValue += "5"
})

btn4.addEventListener("click", ()=> {    
    display.textContent += 4
    displayValue += "4"
})

btn3.addEventListener("click", ()=> {    
    display.textContent += 3
    displayValue += "3"
})

btn2.addEventListener("click", ()=> {    
    display.textContent += 2
    displayValue += "2"
})

btn1.addEventListener("click", ()=> {    
    display.textContent += 1
    displayValue += "1"
})

btn0.addEventListener("click", ()=> {    
    display.textContent += 0
    displayValue += "0"
})


btnAC.addEventListener("click", ()=> {
    display.textContent = ""
    displayValue = ""
})

