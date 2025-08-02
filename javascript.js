const password = document.querySelector("#user_password");
const confirmP = document.querySelector("#confirmP");
const form = document.querySelector("#sign-up-form");

function validatePasswords() {
    if (password.value === confirmP.value) {
        confirmP.setCustomValidity(""); 
        password.style.borderColor = "green";
        confirmP.style.borderColor = "green";
    } else {
        confirmP.setCustomValidity("Passwords do not match!");
        password.style.borderColor = "red";
        confirmP.style.borderColor = "red";
    }
}

password.addEventListener("input", validatePasswords);
confirmP.addEventListener("input", validatePasswords);
