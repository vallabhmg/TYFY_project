// footer.js - Footer Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ Footer loaded successfully");

    // Social icons click handling (agar link # hai to alert)
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert("🌐 Social media profile link will be activated soon!");
            }
        });
    });
});