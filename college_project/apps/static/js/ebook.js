// ebook.js - E-Book Section Specific JavaScript

function filterEbooks() {
    const input = document.getElementById('ebookSearchInput');
    if (!input) return;

    const filter = input.value.toLowerCase().trim();
    const table = document.getElementById('ebookTable');
    if (!table) return;

    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].parentNode.tagName === 'THEAD') continue;
        const titleCell = rows[i].getElementsByTagName('td')[1];
        if (titleCell) {
            const text = titleCell.textContent || titleCell.innerText;
            rows[i].style.display = text.toLowerCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}

// Initialize when the section loads
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('ebookSearchInput');
    
    if (searchInput) {
        // Real-time search on keyup
        searchInput.addEventListener('keyup', filterEbooks);
        
        // Also trigger on paste/clear
        searchInput.addEventListener('input', filterEbooks);
        searchInput.addEventListener('search', filterEbooks);
    }

    console.log("✅ E-Book Section JavaScript Loaded Successfully");
});