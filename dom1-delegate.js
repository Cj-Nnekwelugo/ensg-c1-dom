const userInput = document.getElementById("user-input");
const outputWrapper = document.getElementById("output");
const actionButtonWrapper = document.getElementById("action-btn-wrapper");

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

actionButtonWrapper.addEventListener("click", (event) => {
    if (event.target.id === "multiply-btn") {
        const userValue = readUserInput();
        value = multiply(userValue);
        displayOutput(value);
        userInput.value = "";
    }

    if (event.target.id === "clear-btn") {
        handleClearOutput();
    }
})