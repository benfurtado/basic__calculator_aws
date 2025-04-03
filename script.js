// 🚀 Secure signup using hashed passwords (Base64 encoding for demo purposes)
function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    if (username && password) {
        let hashedPassword = btoa(password);
        localStorage.setItem(username, hashedPassword);
        alert("Signup successful! You can now login.");
        window.location.href = "login.html";
    } else {
        alert("Please enter valid details.");
    }
}

// 🚀 Secure login function
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    let storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === btoa(password)) {
        sessionStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials.");
    }
}

// 🚀 Logout function
function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// 🚀 Check authentication before accessing pages
function checkAuth() {
    if (!sessionStorage.getItem("loggedInUser")) {
        alert("Please log in first.");
        window.location.href = "login.html";
    }
}

// 🚀 Dynamic Calculator that supports multiple numbers
function calculate() {
    let input = document.getElementById("expression").value.replace(/\s+/g, ''); // Remove spaces
    if (!input) {
        alert("Enter a valid mathematical expression!");
        return;
    }

    try {
        let result = eval(input); // 🚨 Evaluates user input (Be careful in production)
        document.getElementById("result").innerText = result;
    } catch (error) {
        alert("Invalid Expression!");
    }
}
