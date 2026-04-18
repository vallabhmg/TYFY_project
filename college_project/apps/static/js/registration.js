// registration.js - Registration Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {

    // Navbar Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            console.log("Registration Page: Mobile menu toggled");
        });
    }

    // Registration Form Validation (Main function already in script.js)
    // You can add extra enhancements here if needed

    console.log("✅ Registration Page JavaScript Loaded Successfully");
});