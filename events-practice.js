const doubleClickButton = document.getElementById("dbl-btn");

doubleClickButton.addEventListener("dblclick", () => {
    alert("The button have been double clicked!");
});

doubleClickButton.addEventListener("mouseover", () => {
    // Using object oriented approach
    // doubleClickButton.style.backgroundColor = "blue";
    // doubleClickButton.style.color = "white";

    // Using classList (tailwind approach)
    doubleClickButton.classList.remove("bg-yellow-400");
    doubleClickButton.classList.add("bg-blue-500", "text-white");
});

// const fullNameInput = document.getElementById("fullname");

// fullNameInput.addEventListener("keydown", (event) => {
//     console.log(event);
// });

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // console.log(event);
    const fullNameEl = document.getElementById("fullname");
    const emailEl = document.getElementById("email");

    const formData = {
        fullname: fullNameEl.value,
        email: emailEl.value
    }

    console.log(`Form data submitted successfully!`);
    console.log(formData);

    fullNameEl.value = "";
    emailEl.value = "";
});