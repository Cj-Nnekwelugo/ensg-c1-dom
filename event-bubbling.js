window.addEventListener("click", () => {
    console.log("Window is clicked");
});

console.dir(document);

document.documentElement.addEventListener("click", () => {
    console.log("Root document is clicked");
    const heading = document.getElementById("heading");
    heading.style.display = "none";
});

document.body.addEventListener("click", () => {
    console.log("Document body is clicked");
});

const parent = document.getElementById("parent");
const button = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent is clicked");
});

button.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button is clicked");
});

