
// ====================== GLOBAL SCRIPT.JS ======================

// 1. Navbar Mobile Menu Toggle (Common for all pages)
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});



// 3. Global Logout Function
function logoutUser() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "/lms/login/";
    }
}

// 4. Tab Switching for LMS Dashboard (if used)
function switchTab(tabName) {
    const sections = ['dashboard', 'digital-id', 'result', 'fees', 'ebook', 'question-papers', 'change-password'];
    sections.forEach(sec => {
        const element = document.getElementById('section-' + sec);
        if (element) {
            element.style.display = (sec === tabName) ? 'block' : 'none';
        }
    });
}

// 5. Console log for debugging
console.log("✅ Global script.js loaded successfully");
