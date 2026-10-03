function sayHello() {
    console.log("Hello User!");
}

function sayResult() {
    console.log("Result is 100");
}

// Using the DOM Property Handler
const btn = document.getElementById("btn");
btn.onclick = function() {
    console.log("The result is 200");
}

// Using addEventListener

// Example 1
const displayNameButton = document.getElementById("display-name-btn");

// 1. Using an arrow function
// displayNameButton.addEventListener("click", () => {
//     alert("User name is John Doe");
// });

// 2. Using a function expression
// displayNameButton.addEventListener("click", function() {
//     alert("User name is John Doe");
// });

// 3. Using a function reference

// First create the function
const displayUsername = () => alert("User name is John Doe");

displayNameButton.addEventListener("click", displayUsername);

// function displayUsername() {
//     alert("User name is John Doe");
// }

// Example 2
// The increase button
const increaseButton = document.getElementById("increase-btn");

// The <p> element to display the count value
const displayCountElement = document.getElementById("display-count");

// The count value
let countValue = 1;

function displayCountValue(count) {
    displayCountElement.textContent = count;
}

displayCountValue(countValue);

function increaseCount() {
    countValue += 1;
}

function handleCountIncrease() {
    increaseCount();
    displayCountValue(countValue);
}

increaseButton.addEventListener("click", handleCountIncrease);