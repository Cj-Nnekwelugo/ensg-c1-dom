// Text Content
const intro = document.getElementById("intro");
intro.textContent = "This is the new intro text";
console.log(intro);

const list = document.querySelector(".list");
list.innerHTML = `
    <li>Apple</li>
    <li>Banana</li>
    <li>Guava</li>
`;

const title = document.querySelector(".title");
// console.log(title.innerHTML);
// console.log(title.textContent);
console.log(title.innerText);

// Attributes
// getAttribute
const paragraphElement = document.querySelector(".content");
const contentAttributeValue = paragraphElement.getAttribute("class");
console.log(contentAttributeValue);

// setAttribute
const link = document.getElementById("link");
link.setAttribute("href", "https://www.w3schools.com");
link.setAttribute("target", "_blank");

// remove attribute
const advert = document.querySelector(".advert");
advert.removeAttribute("id");

// Direct property Access
const h2Element = document.querySelector("#title");
console.dir(h2Element);
h2Element.className = "new-title";

// Styling
// background-color === backgroundColor
// border-radius === borderRadius