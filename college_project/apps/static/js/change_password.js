// change_password.js - Change Password Page Specific JavaScript
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById('passwordChangeForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const currentPass = document.getElementById('currentPassword');
            const newPass = document.getElementById('newPassword');
            const confirmPass = document.getElementById('confirmPassword');

            // 1. Check if New Password is same as Current Password
            if (currentPass.value === newPass.value) {
                alert("OOPs,You Entered Old Password,Please Enter New PAssword");
                e.preventDefault();
                newPass.focus();
                return;
            }

            // 2. Length Validation
            if (newPass.value.length < 6) {
                alert("New password must be at least 6 characters long.");
                e.preventDefault();
                newPass.focus();
                return;
            }

            // 3. Match Validation
            if (newPass.value !== confirmPass.value) {
                alert("New Password and Confirm Password do not match!");
                e.preventDefault();
                confirmPass.focus();
                return;
            }

            console.log("✅ Change Password form validated and submitting...");
        });
    }
});

// 4. Toggle Eye Functionality (Add this outside DOMContentLoaded)
function togglePasswordVisibility(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const eyeIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.innerText = "🔒"; // Change icon when visible
    } else {
        passwordInput.type = "password";
        eyeIcon.innerText = "👁️";
    }
}