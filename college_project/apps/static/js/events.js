// events.js - Events Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {

    // Navbar Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            console.log("Events Page: Mobile menu toggled");
        });
    }

    // Optional: Hover effect enhancement for memory cards
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    console.log("✅ Events Page JavaScript Loaded Successfully");
});