const contactForm = document.getElementById('contact-form');
const submitBtn = contactForm.querySelector('button[type="submit"]');
const firstNameInput = document.getElementById("firstname");
const firstNameErrorElement = document.getElementById("fn-error");

function displayError(element, message) {
    element.textContent = message;
}

function hideError(element) {
    element.textContent = "";
}

firstNameInput.addEventListener("blur", () => {
    if (!firstNameInput.value || firstNameInput.value === " ") {
        displayError(firstNameErrorElement, "First name is required.");
    } else {
        hideError(firstNameErrorElement);
    }
});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            contactForm.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});