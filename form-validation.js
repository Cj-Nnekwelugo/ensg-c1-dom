const contactForm = document.getElementById("contact-form");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone-number");
const modal = document.getElementById("modal");
const errorMessageElement = document.getElementById("message");
const closeButton = document.getElementById("close-btn");

function displayErrorMessage(message) {
    modal.style.display = "block";
    errorMessageElement.textContent = `Error processing request: ${message}`;
}

function handleHideModalElement() {
    modal.style.display = "none";
    errorMessageElement.textContent = "";
}

function clearFormData() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    phoneNumberInput.value = "";
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        phoneNumber: phoneNumberInput.value.trim()
    }

    if (!formData.firstName) {
        displayErrorMessage("Missing first name");        
        return;
    }

    if (!formData.email || !formData.email.includes("@")) {
        displayErrorMessage("Missing email or Invalid email address");
        return;
    }

    console.log("Data submitted suucessfully");
    console.log(formData);
    clearFormData();
});

closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    handleHideModalElement();
});

document.documentElement.addEventListener("click", () => {
    handleHideModalElement();
});