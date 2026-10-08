const userInput = document.getElementById("user-input");
const multiplyButton = document.getElementById("multiply-btn");
const clearButton = document.getElementById("clear-btn");
const outputWrapper = document.getElementById("output");

let value = 0;

displayOutput(value);

function displayOutput(currentValue) {
    outputWrapper.textContent = currentValue;
}

function readUserInput() {
    // console.log(typeof userInput.value);
    return Number(userInput.value);
}

function multiply(userValue) {
    return userValue * 5;
}

function handleClearOutput() {
    value = 0;
    displayOutput(value);
}

multiplyButton.addEventListener("click", () => {
    const userValue = readUserInput();
    value = multiply(userValue);
    displayOutput(value);
    userInput.value = "";
});

clearButton.addEventListener("click", handleClearOutput);