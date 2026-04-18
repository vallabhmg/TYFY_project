// lms_dashboard.js

document.addEventListener("DOMContentLoaded", function() {

    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {

        // Hamburger Click
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });

        // Click outside to close (Mobile only)
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(event.target) && event.target !== menuToggle) {
                    sidebar.classList.remove('active');
                }
            }
        });

        // Optional: Close sidebar when clicking any menu item on mobile
        const menuItems = sidebar.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                menuItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        });
    }

    console.log("✅ LMS Dashboard JS Loaded Successfully");
});

// ====================== TOGGLE FUNCTIONS ======================

function toggleStudyMenu() {
    const dropdown = document.getElementById('study-dropdown');
    const arrow = document.getElementById('study-arrow');
    
    if (!dropdown || !arrow) return;

    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    arrow.textContent = (dropdown.style.display === "block") ? "▲" : "▼";
}

function toggleSettings() {
    const dropdown = document.getElementById('settings-dropdown');
    const arrow = document.getElementById('setting-arrow');
    
    if (!dropdown || !arrow) return;

    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    arrow.textContent = (dropdown.style.display === "block") ? "▲" : "▼";
}

// Logout (already in global, but safe to keep)
function logoutUser() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "/lms/login/";
    }
}