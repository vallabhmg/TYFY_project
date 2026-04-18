
document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ Result Page Section JavaScript Loaded Successfully");
    
    // Optional: Add hover glow effect to result rows (already handled in CSS)
    const rows = document.querySelectorAll('.result-row');
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transition = 'all 0.3s ease';
        });
    });
});
