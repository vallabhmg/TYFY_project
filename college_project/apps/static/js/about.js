// about.js - About Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {
    
    // Navbar Mobile Menu Toggle (Already in main script.js, but safe duplicate if needed)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Optional: Smooth scroll for any internal links (if you add in future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("✅ About Page JavaScript Loaded Successfully");
});