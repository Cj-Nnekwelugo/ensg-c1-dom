// Without Delegation

// const greetBtn = document.getElementById("greet");
// const delegateBtn = document.getElementById("delegate");
// const jsBtn = document.getElementById("js");

// greetBtn.addEventListener("click", () => console.log(greetBtn.textContent));
// delegateBtn.addEventListener("click", () => console.log(delegateBtn.textContent));
// jsBtn.addEventListener("click", () => console.log(jsBtn.textContent));


// With Delegation
// 1. Access the parent element
const divWrapper = document.getElementById("container");

// 2. Attach the listener on the parent element
divWrapper.addEventListener("click", (event) => {
    if (event.target.id === "greet") {
        console.log(event.target.textContent);
    }

    if (event.target.id === "delegate") {
        console.log(event.target.textContent);
    }

    if (event.target.id === "js") {
        console.log(event.target.textContent);
    }
});