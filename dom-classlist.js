/* 
- Native JavaScript Objects
- DOM Objects
 
*/

// DOM object
const boxElement = document.getElementById("box");
const showButton = document.getElementById("show-btn");
const hideButton = document.getElementById("hide-btn");

// Native object
const user = {
    name: "John Doe",
    email: "john@email.com",
    age: 45
};


// Methods 
/* 
- add()
- remove()
- toggle()

*/

showButton.addEventListener("click", () => {
    // Vanilla (add method)
    // boxElement.classList.add("hide");  

    // Tailwind (add method)
    // boxElement.classList.add("hidden");

    // remove method
    // boxElement.classList.remove("font-extrabold");


    // toggle method
    boxElement.classList.remove("hidden");
    boxElement.classList.add("flex");

    if (boxElement.classList.contains("flex")) {
        alert("Box element is now showing");
    }
}); 

hideButton.addEventListener("click", () => {
    boxElement.classList.remove("flex");
    boxElement.classList.add("hidden");
});