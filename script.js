// Signup function
function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert("Signup successful! You can now login.");
        window.location.href = "login.html";
    } else {
        alert("Please enter valid details.");
    }
}

// Login function
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (localStorage.getItem(username) === password) {
        sessionStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials.");
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Check if user is logged in
function checkAuth() {
    if (!sessionStorage.getItem("loggedInUser")) {
        alert("Please log in first.");
        window.location.href = "login.html";
    }
}

// Calculator function
function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter valid numbers!");
        return;
    }

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2; 
            break;
    }
    document.getElementById("result").innerText = result;
}
