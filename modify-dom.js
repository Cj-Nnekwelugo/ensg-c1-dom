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

const introJs = document.getElementById("intro-js");
// console.dir(introJs);
introJs.style.backgroundColor = "gold";
introJs.style.color = "black";
introJs.style.paddingInline = "5rem";
introJs.style.borderRadius = "15px";
introJs.style.transform = "rotate(5deg)";
// introJs.style.display = "none";

// Data Attribute
console.log(introJs.dataset.introText);
introJs.dataset.uniqueTextId = "gshb5627Ndnkl8l";


// Form Values
const fullName = document.getElementById("full-name");
// console.dir(fullName);
fullName.value = "Sam Jackson";
console.log(fullName.value);

const gender = document.getElementById("gender");
console.dir(gender);
gender.checked = false;