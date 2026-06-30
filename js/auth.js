/* ======================================
   SHOW / HIDE PASSWORD
====================================== */

document.querySelectorAll(".togglePassword").forEach(icon => {

    icon.addEventListener("click", () => {

        const input = document.getElementById(icon.dataset.target);

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    });

});


/* ======================================
   EMAIL VALIDATION
====================================== */

function validateEmail(email){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}


/* ======================================
   PASSWORD VALIDATION
====================================== */

function validatePassword(password){

    const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return regex.test(password);

}


/* ======================================
   SHOW ERROR
====================================== */

function showError(id,message){

    document.getElementById(id).textContent = message;

}


/* ======================================
   CLEAR ERROR
====================================== */

function clearError(id){

    document.getElementById(id).textContent = "";

}

/* ======================================
   LOGIN VALIDATION
====================================== */

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let valid=true;

const email=document.getElementById("loginEmail").value.trim();

const password=document.getElementById("loginPassword").value.trim();

clearError("loginEmailError");
clearError("loginPasswordError");

if(email===""){

showError("loginEmailError","Email is required");

valid=false;

}

else if(!validateEmail(email)){

showError("loginEmailError","Enter a valid email");

valid=false;

}

if(password===""){

showError("loginPasswordError","Password is required");

valid=false;

}

if(valid){

alert("Login Successful! (Frontend Demo)");

window.location.href="profile.html";

}

});

}


/* ======================================
   REGISTER VALIDATION
====================================== */

const registerForm=document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

let valid=true;

const name=document.getElementById("registerName").value.trim();

const email=document.getElementById("registerEmail").value.trim();

const password=document.getElementById("registerPassword").value.trim();

const confirm=document.getElementById("confirmPassword").value.trim();

const terms=document.getElementById("terms");

clearError("registerNameError");
clearError("registerEmailError");
clearError("registerPasswordError");
clearError("confirmPasswordError");
clearError("termsError");


if(name===""){

showError("registerNameError","Full name is required");

valid=false;

}

if(email===""){

showError("registerEmailError","Email is required");

valid=false;

}

else if(!validateEmail(email)){

showError("registerEmailError","Enter a valid email");

valid=false;

}

if(password===""){

showError("registerPasswordError","Password is required");

valid=false;

}

else if(!validatePassword(password)){

showError("registerPasswordError",
"Minimum 8 characters with Uppercase, Lowercase, Number & Special Character");

valid=false;

}

if(confirm===""){

showError("confirmPasswordError","Confirm your password");

valid=false;

}

else if(password!==confirm){

showError("confirmPasswordError","Passwords do not match");

valid=false;

}

if(!terms.checked){

showError("termsError","Accept Terms & Conditions");

valid=false;

}

if(valid){

alert("Registration Successful! (Frontend Demo)");

window.location.href="login.html";

}

});

}

/* ======================================
   FORGOT PASSWORD VALIDATION
====================================== */

const forgotForm = document.getElementById("forgotForm");

if(forgotForm){

forgotForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("forgotEmail").value.trim();

clearError("forgotEmailError");

if(email===""){

showError("forgotEmailError","Email is required");

return;

}

if(!validateEmail(email)){

showError("forgotEmailError","Enter a valid email");

return;

}

alert("Password reset link sent successfully! (Frontend Demo)");

window.location.href="login.html";

});

}


/* ======================================
   LOGOUT
====================================== */

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",function(){

const confirmLogout=confirm("Are you sure you want to logout?");

if(confirmLogout){

alert("Logged out successfully!");

window.location.href="login.html";

}

});

}


/* ======================================
   INPUT BORDER VALIDATION
====================================== */

document.querySelectorAll("input").forEach(input=>{

input.addEventListener("input",()=>{

if(input.value.trim()!==""){

input.classList.remove("invalid");

input.classList.add("valid");

}else{

input.classList.remove("valid");

}

});

});


/* ======================================
   ENTER KEY SUPPORT
====================================== */

document.querySelectorAll("form").forEach(form=>{

form.addEventListener("keypress",function(e){

if(e.key==="Enter"){

form.requestSubmit();

}

});

});


/* ======================================
   END OF AUTH JS
====================================== */