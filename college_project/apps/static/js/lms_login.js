// lms_login.js - LMS Login Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {

    // LMS Login Form Validation
    const lmsForm = document.getElementById('lmsLoginForm');

    if (lmsForm) {
        lmsForm.addEventListener('submit', function(e) {
            const emailInput = document.getElementById('lmsEmail');
            const passwordInput = document.getElementById('lmsPassword');

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Email Format Validation
            if (!emailPattern.test(emailInput.value.trim())) {
                alert("Please enter a valid email address.");
                emailInput.focus();
                e.preventDefault();
                return false;
            }

            // Password Length Validation (8 to 16 characters)
            const passLength = passwordInput.value.length;
            if (passLength < 8 || passLength > 16) {
                alert("Password must be between 8 and 16 characters long.");
                passwordInput.focus();
                e.preventDefault();
                return false;
            }

            console.log("LMS Login successful - Redirecting to Dashboard...");
            // Form will submit normally to {% url 'lms_dashboard' %}
        });
    }

    console.log("✅ LMS Login Page JavaScript Loaded Successfully");
});