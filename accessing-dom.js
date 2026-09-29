// Accessing DOM Elements
// getElementById
const h1Element = document.getElementById("intro");
// console.log(h1Element);
console.dir(h1Element);
console.log(h1Element.textContent);

// getElementsByClassName
const allPElements = document.getElementsByClassName("text");
console.log(allPElements);

// getElementsByTagName
const allListElements = document.getElementsByTagName("li");
console.log(allListElements);

// querySelector
const title = document.querySelector(".title");
console.log(title);

const heading = document.querySelector(".dom > h2");
// console.log(heading);

// querySelectorAll 
const h2El = document.querySelectorAll(".dom > h2");
h2El.forEach(h2 => console.log(h2));


// Example
const mainHeader = document.getElementById("main-header");
const content = mainHeader.querySelector(".content");
console.log(content);

