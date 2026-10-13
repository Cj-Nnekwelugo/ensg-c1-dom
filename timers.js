// setTimeout

const introText = document.getElementById("intro");

function changeIntroText(name) {
    introText.textContent = `Your JavaScript tutor is ${name}`;
}

// syntax
// setTimeout(callback, timeDelay(ms))

// Using an arrow function
// setTimeout(() => changeIntroText(), 5000);

// Using a function reference
setTimeout(changeIntroText, 5000, "Amanda Sax");

// Using a function expression
// setTimeout(function() {
//     changeIntroText("john doe");
// }, 5000);


// setInterval
const countDisplay = document.getElementById("count-value");
let count = 0;

function displayCountValue(currentValue) {
    countDisplay.textContent = currentValue;
}

displayCountValue(count);

function increaseCount() {
    count++;
    displayCountValue(count);
}

// syntax
// setInterval(callback, timeInterval)

// setInterval(increaseCount, 5000);