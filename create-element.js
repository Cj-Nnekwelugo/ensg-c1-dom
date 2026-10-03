// Creating elements
const divElement = document.querySelector(".create");
// console.log(divElement);

// Create <p> element
const pElement = document.createElement("p");

// Configure
pElement.id = "create-text";
pElement.textContent = "The create element method allows us to create a new DOM element and this new element can be attached to the DOM tree.";


// Create <a>
const linkTag = document.createElement("a");

// configure 
linkTag.href = "https://w3schools.com";
linkTag.textContent = "Go to W3Schools Website";

// Add a new element to the DOM
// divElement.appendChild(pElement);

// Adding multiple elements to the DOM
divElement.append(pElement, linkTag);


// create a div element
const newDivElement = document.createElement("div");

// configure
newDivElement.className = "new-div";
newDivElement.innerHTML = `
    <h2>Understanding the DOM Tree</h2>
    <p>This is integral to understanding how the DOM works</p>
`;

// Add the new div element to the DOM
document.body.appendChild(newDivElement);



// Removing elements from the DOM
const elementToBeRemoved = document.getElementById("remove");

// Using remove()
// elementToBeRemoved.remove();

const firstChild = elementToBeRemoved.firstElementChild;
// console.log(firstChild);
elementToBeRemoved.removeChild(firstChild);