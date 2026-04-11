// Admission Form & Payment Modal Logic
function showPaymentModal() {
    const form = document.getElementById('regForm');
    if (form && form.checkValidity()) {
        const modal = document.getElementById('paymentModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    } else if (form) {
        form.reportValidity(); 
    }
}

function closeModal() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.style.display = 'none';
    }
}
// Future Admin Panel functions
function toggleAdminSidebar() {
    // Admin logic goes here...
}
// ID Verification Logic
function verifyAndShowID() {
    const idVal = document.getElementById('idNumInput').value;
    const passVal = document.getElementById('idPassInput').value;

    if (idVal.trim() !== "" && passVal === "12345") {
        document.getElementById('id-login-box').style.display = 'none';
        document.getElementById('display-id-val').innerText = idVal.toUpperCase();
        document.getElementById('final-id-card').style.display = 'block';
    } else {
        alert("Invalid Details! Please use Password: 12345");
    }
}

function resetIdPortal() {
    document.getElementById('id-login-box').style.display = 'block';
    document.getElementById('final-id-card').style.display = 'none';
    document.getElementById('idNumInput').value = "";
    document.getElementById('idPassInput').value = "";
}

// 2. PDF Search Filter Logic
function filterPDFs() {
    let input = document.getElementById('pdfSearchInput').value.toLowerCase();
    let table = document.getElementById('pdfTable');
    let tr = table.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1]; 
        
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(input) > -1) {
                tr[i].style.display = ""; // Show row
            } else {
                tr[i].style.display = "none"; // Hide row
            }
        }
    }
}


// 1. Settings Dropdown Toggle Function
function toggleSettings() {
    console.log("Settings clicked");
    const dropdown = document.getElementById('settings-dropdown');
    const arrow = document.getElementById('setting-arrow');
    
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        if(arrow) arrow.innerText = "▲";
    } else {
        dropdown.style.display = "none";
        if(arrow) arrow.innerText = "▼";
    }
}

// Function to toggle (open/close) the Study Material menu
function toggleStudyMenu() {
    const menu = document.getElementById('study-dropdown');
    const arrow = document.getElementById('study-arrow');
    
    if (menu.style.display === "none") {
        menu.style.display = "block";
        arrow.innerHTML = "▲";
    } else {
        menu.style.display = "none";
        arrow.innerHTML = "▼";
    }
}


// 2.Tab Switching Function
function switchTab(tabName) {
    const sections = ['dashboard', 'digital-id', 'result', 'fees', 'ebook', 'question-papers', 'change-password'];

    sections.forEach(sec => {
        const element = document.getElementById('section-' + sec);
        if (element) {
            element.style.display = (sec === tabName) ? 'block' : 'none';
        }
    });
}

// 2. Global Logout Function (Redirection Logic)
function logoutUser() {
    let confirmLogout = confirm("Are You confirm to LogOut");
    if (confirmLogout) {
        console.log("Redirecting to Login Page...");
        window.location.href = "/lms/login/"; 
    }
}

// for Payment button click dummy function
function processPayment(type) {
    alert("Redirecting to Secure Payment Gateway for: " + type + " Fees");
}

function filterEbooks() {
    let input = document.getElementById('ebookSearchInput').value.toLowerCase();
    let table = document.getElementById('ebookTable');
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = (txtValue.toLowerCase().indexOf(input) > -1) ? "" : "none";
        }
    }
}

function filterQPs() {
    let input = document.getElementById('qpSearchInput').value.toLowerCase(); 
    let table = document.getElementById('qpTable'); 
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = (txtValue.toLowerCase().indexOf(input) > -1) ? "" : "none";
        }
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if(menuToggle && sidebar) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); 
            sidebar.classList.toggle('active');
            console.log("Sidebar status: ", sidebar.classList.contains('active'));
        });
    }

    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && event.target !== menuToggle) {
                sidebar.classList.remove('active');
            }
        }
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navList = document.getElementById('nav-list');

//     if(mobileMenu) {
//         mobileMenu.addEventListener('click', function() {
//             navList.classList.toggle('active');
            
//             // Optional: Hamburger ko 'X' shape me badalne ke liye
//             mobileMenu.classList.toggle('is-active'); 
//         });
//     }
    
//     // Links par click karne par menu band ho jaye
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', () => {
//             navList.classList.remove('active');
//         });
//     });
// });

// Nav Toggle Logic
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById('mobile-menu'); // Hamburger Icon
    const navLinks = document.getElementById('nav-list');     // UL Links

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            // Check karein ki click detect ho raha hai
            console.log("Hamburger clicked!"); 
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("Elements not found! Check IDs in HTML.");
    }
});