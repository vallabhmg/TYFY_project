// question_papers.js - Question Papers Section Specific JavaScript

function filterQPs() {
    const input = document.getElementById('qpSearchInput');
    if (!input) return;

    const filter = input.value.toLowerCase().trim();
    const table = document.getElementById('qpTable');
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
    const searchInput = document.getElementById('qpSearchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', filterQPs);
        searchInput.addEventListener('input', filterQPs);
        searchInput.addEventListener('search', filterQPs);
    }

    console.log("✅ Question Papers Section JavaScript Loaded Successfully");
});