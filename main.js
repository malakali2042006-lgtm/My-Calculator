// Get display element
const display = document.getElementById("result");

// Get all calculator buttons
const buttons = document.querySelectorAll(".buttons button");

// Variables for calculations
let firstNumber = "";
let operator = "";
let secondNumber = "";

// Handle button clicks
let justCalculated = false;
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const value = button.textContent.trim();

        // Clear all
        if (value === "AC") {
            display.value = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
            justCalculated = false;
            return;
        }

        // Delete last character
        if (value === "DEL") {
            display.value = display.value.slice(0, -1);
            return;
        }

// Add numbers
if (!isNaN(value) && value !== "") {

    if (justCalculated) {
        display.value = "";
        justCalculated = false;
    }

    display.value += value;
}

        // Add decimal point only once
if (value === ".") {

    if (justCalculated) {
        display.value = "";
        justCalculated = false;
    }

    if (!display.value.includes(".")) {
        display.value += value;
    }
}

        // Percentage
if (value === "%" && display.value !== "") {
    display.value = Number(display.value) / 100;
    return;
}

        // Select operator
        if (["+", "-", "×", "÷"].includes(value)) {
            firstNumber = display.value;
            operator = value;
            display.value = "";
            justCalculated = false;
            return;
        }

        // Calculate result
        if (value === "=" && operator !== "") {

            secondNumber = display.value;

            let result;

            if (operator === "+") {
                result = Number(firstNumber) + Number(secondNumber);
            }

            if (operator === "-") {
                result = Number(firstNumber) - Number(secondNumber);
            }

            if (operator === "×") {
                result = Number(firstNumber) * Number(secondNumber);
            }

            if (operator === "÷") {
    if (Number(secondNumber) === 0) {
        result = "Error";
    } else {
        result = Number(firstNumber) / Number(secondNumber);
    }
}

            display.value = result;
            justCalculated = true;

            // Reset variables
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }

    });
});

