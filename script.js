let form = document.getElementById("form");
let passwordInput = document.getElementById("password");
let usernameInput = document.getElementById("username");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("The form has been submitted!");

    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username == "js" && password == "123") {
        alert("Sucessufully logged in");
    } else {
        alert("Incorrect! Please try again.");
    }

})

passwordInput.addEventListener("keypress", () => {
    let password = passwordInput.value;
    // regular expressions - regex
    /* Validations
    Uppercase
    Lowercase
    Number
    Special Character
    Min length 8
    */
    if (
        password.length >= 8 &&
        password.match("[A-Z]") &&
        password.match("[a-z]") &&
        password.match("[0-9]") && // \\d
        password.match("[\\W]")
    ) {
        passwordInput.setAttribute("class", "valid");
        document.getElementById("submit-button").removeAttribute("disabled");
    } else {
        passwordInput.setAttribute("class", "invalid");
    }

})