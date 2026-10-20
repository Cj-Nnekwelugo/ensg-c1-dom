const countDisplayElement = document.getElementById("count-value-display");
const increaseBtn = document.getElementById("inc-btn");
const decreaseBtn = document.getElementById("dec-btn");
const UpdateBtn = document.getElementById("upd-btn");

let countValue = Number(localStorage.getItem("count")) || 0;

// localStorage 
// setItem: Save
// getItem: Retrieve
// clear: Clear

displayCurrentCount(countValue);

function displayCurrentCount(currentValue) {
    countDisplayElement.textContent = currentValue;
}

function handleIncreaseCount() {
    countValue++; // countValue = countValue + 1;
    localStorage.setItem("count", countValue); // Save to storage
    displayCurrentCount(countValue);
}

function handleDecreaseCount() {
    countValue--; // countValue = countValue - 1;
    localStorage.setItem("count", countValue); // Save to storage
    displayCurrentCount(countValue);
}

function handleUpdateCount() {
    const newCountValue = prompt("Enter new count value");
    countValue = Number(newCountValue);
    localStorage.setItem("count", countValue); // Save to storage
    displayCurrentCount(countValue); 
}

increaseBtn.addEventListener("click", handleIncreaseCount);
decreaseBtn.addEventListener("click", handleDecreaseCount);
UpdateBtn.addEventListener("click", handleUpdateCount);