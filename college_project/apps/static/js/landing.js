// ==================== LANDING PAGE SCRIPT ====================

document.addEventListener("DOMContentLoaded", function() {

    // Hamburger Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!navLinks.contains(event.target) && event.target !== mobileMenu) {
                navLinks.classList.remove('active');
            }
        }
    });

    console.log("✅ Vikas Education Landing Page Script Loaded Successfully!");
});