// JS sign up

// Get form elements
const form = document.getElementById("form1");
const firstNameInput = document.getElementById("firstName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmpass");

// Validate username without spaces
function validateUsername(username)
 {
  return !/\s/.test(username);
}

// Validate password more than 8 characters, with at least 1 number, uppercase, and special characters
function validatePassword(password)
 {
  const hasNumber = /[0-9]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  return password.length >= 8 && hasNumber && hasUpperCase && hasSpecial;
}

// Validate email format
function validateEmail(email) 
{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isEmailTaken(email) 
{
  // Replace with your own code to search for email in database or storage
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.some((user) => user.email === email);
}



// Check if username exists in local storage
function isUsernameTaken(username)
 {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.some((user) => user.username === username);
}

// Save user data to local storage
function saveUserData(username, password, email) 
{
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({ username, password, email });
  const userse={ username,password,email};
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.setItem("userse", JSON.stringify(userse));
}



// Handle form submission
form.addEventListener("submit", (e) => 
{



  e.preventDefault();

  // Get form data
  const firstName = firstNameInput.value.trim();
  
 
  const email = emailInput.value.trim();
  
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  const username =firstNameInput.value.trim();


  let message = "";
  let isValid = true;


  
  if (!validateUsername(username)) 
  {
    message = "<li>Username must not contain spaces</li>";
    const errorMessage = document.getElementById("error-message1");
    errorMessage.classList.remove("d-none");
    const errors1 = document.getElementById("errors1");
    errors1.innerHTML = message;
    firstNameInput.style.borderColor="red";
    isValid = false;
  }
   
  else if (isUsernameTaken(username)) 
  {
    message = "<li>Username already exists</li>";
    const errorMessage = document.getElementById("error-message1");
    errorMessage.classList.remove("d-none");
    const errors2 = document.getElementById("errors1");
    errors2.innerHTML = message;
    lastNameInput.style.borderColor="red";
    isValid = false;
    
  }
  if (!validatePassword(password))
   {

    message = "<li>Password must be at least 8 characters long and contain at least 1 number, 1 uppercase letter, and 1 special character</li>";
    const errorMessage1 = document.getElementById("error-message5");
    errorMessage1.classList.remove("d-none");
    const errors3 = document.getElementById("errors5");
    errors3.innerHTML = message;
    passwordInput.style.borderColor="red";
    isValid = false;
  }
  if (!validateEmail(email)) 
  {

    message = "<li>Email must be a valid email address</li>";
    const errorMessage2 = document.getElementById("error-message2");
    errorMessage2.classList.remove("d-none");
    const errors4 = document.getElementById("errors2");
    errors4.innerHTML = message;
    emailInput.style.borderColor="red";
    isValid = false;

    
  } 
  else if (isEmailTaken(email)) 
  {

    
    message = "<li>The E-mail already exists</li>";
    const errorMessage3 = document.getElementById("error-message2");
    errorMessage3.classList.remove("d-none");
    const errors5 = document.getElementById("errors2");
    errors5.innerHTML = message;
    emailInput.style.borderColor="red";
    isValid = false;
    
  }
 
 
  
  if (password !== confirmPassword) 
  {
    message = "<li>Passwords don't match</li>";
    const errorMessage6 = document.getElementById("error-message6");
    errorMessage6.classList.remove("d-none");
    const errors8 = document.getElementById("errors6");
    errors8.innerHTML = message;
    isValid = false;
    confirmPassword.style.borderColor="red";


  }

  // Save data if valid
  if (isValid)
   {
    saveUserData(username, password, email);
    window.location.href = "index.html";
  }
});

// End Js for sign up page

