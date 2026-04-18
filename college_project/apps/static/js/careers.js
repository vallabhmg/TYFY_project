// careers.js - Careers Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {

    // Navbar Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            console.log("Careers Page: Mobile menu toggled");
        });
    }

    // Apply Button Click Handler (Dummy Alert)
    const applyButtons = document.querySelectorAll('.btn-apply');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.parentElement.querySelector('h2') 
                           ? this.parentElement.querySelector('h2').innerText 
                           : "this position";
            
            alert(`✅ Application started for: ${jobTitle}\n\nWe will redirect you to the application form shortly.`);
            
            // You can later replace this with actual form modal or redirection
        });
    });

    console.log("✅ Careers Page JavaScript Loaded Successfully");
});