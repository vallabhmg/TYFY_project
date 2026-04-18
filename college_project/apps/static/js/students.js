// students.js - Students Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {

    // Navbar Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            console.log("Students Page: Mobile menu toggled");
        });
    }

    // Optional: Add subtle animation when cards come into view
    const studentCards = document.querySelectorAll('.student-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    studentCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease";
        observer.observe(card);
    });

    console.log("✅ Students Page JavaScript Loaded Successfully");
});