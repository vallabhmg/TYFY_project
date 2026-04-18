// contact.js - Contact Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {

    // Navbar Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            console.log("Contact Page: Mobile menu toggled");
        });
    }

    // Contact Form Validation (Already in script.js, but enhanced here)
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nameInput = document.getElementById('userName');
            const emailInput = document.getElementById('userEmail');
            const messageInput = document.getElementById('message');

            const namePattern = /^[a-zA-Z\s]+$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Name Validation
            if (!namePattern.test(nameInput.value.trim())) {
                alert("Please enter a valid name (Letters and spaces only).");
                nameInput.focus();
                e.preventDefault();
                return false;
            }

            // Email Validation
            if (!emailPattern.test(emailInput.value.trim())) {
                alert("Please enter a valid email address.");
                emailInput.focus();
                e.preventDefault();
                return false;
            }

            // Message Validation (Minimum length)
            if (messageInput.value.trim().length < 10) {
                alert("Please write a proper message (at least 10 characters).");
                messageInput.focus();
                e.preventDefault();
                return false;
            }

            // Success Message
            alert("✅ Thank you! Your message has been sent successfully.\nWe will get back to you soon.");
        });
    }

    console.log("✅ Contact Page JavaScript Loaded Successfully");
});