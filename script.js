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