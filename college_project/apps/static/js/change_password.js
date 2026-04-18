// change_password.js - Change Password Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector('.password-card form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const currentPass = form.querySelector('input[placeholder="••••••••"]');
            const newPass = form.querySelector('input[placeholder="New Password"]');
            const confirmPass = form.querySelector('input[placeholder="Confirm New Password"]');

            if (!currentPass || !newPass || !confirmPass) return;

            // Basic Validation
            if (newPass.value.length < 6) {
                alert("New password must be at least 6 characters long.");
                e.preventDefault();
                newPass.focus();
                return;
            }

            if (newPass.value !== confirmPass.value) {
                alert("New Password and Confirm Password do not match!");
                e.preventDefault();
                confirmPass.focus();
                return;
            }

            // You can add more complex validation here if needed
            console.log("✅ Change Password form submitted");
        });
    }

    console.log("✅ Change Password Section JavaScript Loaded Successfully");
});