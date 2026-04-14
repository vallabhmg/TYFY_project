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

// Nav Toggle Logic
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById('mobile-menu'); // Hamburger Icon
    const navLinks = document.getElementById('nav-list');     // UL Links

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            console.log("Hamburger clicked!"); 
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("Elements not found! Check IDs in HTML.");
    }
});

//Contact Form Validation

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Inputs ko select karein
            const nameInput = document.getElementById('userName');
            const emailInput = document.getElementById('userEmail');
            
            
            const namePattern = /^[a-zA-Z\s]+$/; //Only Aplhabet
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard Email format

            // 1. Name Validation
            if (!namePattern.test(nameInput.value)) {
                alert("Please enter a valid name (Letters only, no numbers).");
                nameInput.focus();
                e.preventDefault(); // Form submit hone se rok dega
                return false;
            }

            // 2. Email Validation
            if (!emailPattern.test(emailInput.value)) {
                alert("Please enter a valid email address.");
                emailInput.focus();
                e.preventDefault();
                return false;
            }

            alert("Success! Your message is being sent.");
        });
    }
});

// LMS Login Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const lmsForm = document.getElementById('lmsLoginForm');

    if (lmsForm) {
        lmsForm.addEventListener('submit', function(e) {
            const emailInput = document.getElementById('lmsEmail');
            const passwordInput = document.getElementById('lmsPassword'); 
            const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email Regex Pattern
            // 1. Email Format Validation
            if (!emailPattern.test(emailInput.value)) {
                alert("Please enter a valid email address.");
                emailInput.focus();
                e.preventDefault();
                return false;
            }
            // 2. Password Length Validation (Min 8, Max 16)
            const passLength = passwordInput.value.length;
            if (passLength < 8 || passLength > 16) {
                alert("Password must be between 8 and 16 characters long.");
                passwordInput.focus();
                e.preventDefault();
                return false;
            }
            console.log("Login successful, redirecting...");
        });
    }
});

function validateRegistration() {
    const form = document.getElementById('regForm');
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('createPass').value;
    const confirmPass = document.getElementById('confirmPass').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Email Regex Pattern
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (e.g., name@example.com)");
        return;
    }

    // 2. Password Strength Check
    const passPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const hasSpace = /\s/g.test(pass);

    if (hasSpace) {
        alert("Password should not contain any spaces.");
        return;
    }
    if (!passPattern.test(pass)) {
        alert("Password weak! It must be at least 8 characters long and include a mix of letters, numbers, and special symbols (@$!%*?&).");
        return;
    }
    if (pass !== confirmPass) {
        alert("Passwords do not match!"); //3. Confirm Password Match
        return;
    }
    // 4. Final Form Validity
    if (form.checkValidity()) {
        showPaymentModal();
    } else {
        form.reportValidity();
    }
    document.getElementById('paymentModal').style.display = 'flex';
}

// 2. Payment Processing Logic
function processRegistrationPayment() {
    const payNameInput = document.getElementById('payFullName');
    const payEmailInput = document.getElementById('payEmail');
    
    const payName = payNameInput.value.trim();
    const payEmail = payEmailInput.value.trim();
 // Regular Expressions
    const namePattern = /^[a-zA-Z\s]+$/; // Sirf letters aur space
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Proper email format
    // 1. Full Name Validation
    if (payName === "") {
        alert("Please enter your Full Name.");
        payNameInput.focus();
        return;
    }
    if (!namePattern.test(payName)) {
        alert("Invalid Name! Please use only alphabets (A-Z).");
        payNameInput.focus();
        return;
    }
    // 2. Email (Payment ID) Validation
    if (payEmail === "") {
        alert("Please enter your Payment Email ID.");
        payEmailInput.focus();
        return;
    }
    if (!emailPattern.test(payEmail)) {
        alert("Invalid Email Format! Please enter a valid email (e.g. user@gmail.com).");
        payEmailInput.focus();
        return;
    }
    document.getElementById('paymentFormUI').style.display = 'none';
    document.getElementById('successUI').style.display = 'block';

    setTimeout(function() {
        document.getElementById('paymentModal').style.display = 'none';
        document.getElementById('paymentFormUI').style.display = 'block';
        document.getElementById('successUI').style.display = 'none';
        document.getElementById('regForm').reset();
        payNameInput.value = "";
        payEmailInput.value = "";
        
        alert("Your registration is completed successfully!");
    }, 4000);
}

function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// --- Admission Form Validation & Logic ---
// 1. Toggle Buttons based on Online/Offline selection
function togglePaymentButtons(mode) {
    const onlineGroup = document.getElementById('onlinePayGroup');
    const offlineGroup = document.getElementById('offlineSubmitGroup');
    const btnUniv = document.getElementById('btnUniv');
    const btnTuition = document.getElementById('btnTuition');
    if (mode === 'offline') {
        // Disable online button
        btnUniv.disabled = true;
        btnTuition.disabled = true;
        onlineGroup.style.opacity = "0.5";
        onlineGroup.style.pointerEvents = "none";
        // Show Offline Submit button
        offlineGroup.style.display = "block";
    } else {
        // Enable online buttons
        btnUniv.disabled = false;
        btnTuition.disabled = false;
        onlineGroup.style.opacity = "1";
        onlineGroup.style.pointerEvents = "auto";
        // Hide Offline Submit button
        offlineGroup.style.display = "none";
    }
}
// 2. Main Validation Function
function validateAdmissionForm() {
    const name = document.getElementById('studentName').value.trim();
    const address = document.getElementById('studentAddress').value.trim();
    const mobile = document.getElementById('studentMobile').value.trim();
    const parentMobile = document.getElementById('parentMobile').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    const aadhar = document.getElementById('aadharNo').value.trim();
    
    // File inputs ko select karna
    const files = document.querySelectorAll('input[type="file"]');
    // Regex Patterns
    const nameRegex = /^[a-zA-Z\s]+$/;
    const addressRegex = /^[a-zA-Z0-9\s,.-]+$/;
    const numericRegex = /^[0-9]+$/;
    // Proper Email Format Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. Name Validation
    if (!nameRegex.test(name)) {
        alert("Invalid Name! Please use only alphabets.");
        return false;
    }
    // 2. Address Validation
    if (!addressRegex.test(address)) {
        alert("Invalid Address! Only ( , . - ) are allowed.");
        return false;
    }
    // 3. Mobile Numbers Validation
    if (mobile.length !== 10 || !numericRegex.test(mobile)) {
        alert("Student Mobile Number must be 10 digits.");
        return false;
    }
    if (parentMobile.length !== 10 || !numericRegex.test(parentMobile)) {
        alert("Parent's Mobile Number must be 10 digits.");
        return false;
    }
    // 4. Proper Email Validation
    if (!emailRegex.test(email)) {
        alert("Please enter a valid Email Address (e.g. user@example.com).");
        return false;
    }
    // 5. Aadhar Validation
    if (aadhar.length !== 12 || !numericRegex.test(aadhar)) {
        alert("Aadhar Card Number must be 12 digits.");
        return false;
    }
    // 6. File Upload Check (Sabhi documents upload hona zaroori hai)
    for (let fileInput of files) {
        if (fileInput.files.length === 0) {
            alert("Please upload all required documents (Photo, Signature, and Marksheets).");
            return false;
        }
    }
    return true;
}

// Updated Submit Function
// 1. Payment Modal Open karne ka function
function handleAdmissionSubmit(type) {
    // Pehle Admission Form validate hoga
    if (validateAdmissionForm()) {
        if (type === 'Offline') {
            alert("✅ Success! Your admission details have been submitted successfully.");
            document.getElementById('admissionForm').reset();
            togglePaymentButtons('online');
        } else {
            // Online Mode: Modal dikhao aur Amount set karo
            const amount = (type === 'University') ? "₹2000" : "₹5000";
            document.getElementById('payAmount').value = amount;
            document.getElementById('paymentPopupModal').style.display = 'flex';
        }
    }
}
// 2. Modal Band karne ka function
function closePaymentModal() {
    document.getElementById('paymentPopupModal').style.display = 'none';
}
// 3. Final Pay Button Logic (Email aur Name Validation ke sath)
// 1. Payment Process complete hone par Receipt dikhane ka logic
function finalPayProcess() {
    const fullName = document.getElementById('payFullName').value.trim();
    const payEmail = document.getElementById('payEmailID').value.trim();
    const amount = document.getElementById('payAmount').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (fullName === "" || !emailRegex.test(payEmail)) {
        alert("Please enter valid Name and Payment ID.");
        return;
    }
    // Modal data fill karein
    document.getElementById('resName').innerText = fullName;
    document.getElementById('resID').innerText = payEmail;
    document.getElementById('resAmount').innerText = amount;
    document.getElementById('resDate').innerText = new Date().toLocaleDateString();
    // Payment modal band karein aur Receipt modal kholein
    closePaymentModal();
    document.getElementById('receiptModal').style.display = 'flex';
}
// 2. Receipt Modal band karke Admission form par wapas jaane ke liye
function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';
    document.getElementById('admissionForm').reset(); // Form reset ho jayega
    alert("Process Cancelled. Returning to Admission Form.");
}

// 3. Download Logic (Simple Text file download)
// Function to Download Receipt as PDF using jspdf
async function downloadReceipt() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    // Data fetch karna receipt modal se
    const name = document.getElementById('resName').innerText;
    const pid = document.getElementById('resID').innerText;
    const amt = document.getElementById('resAmount').innerText;
    const date = document.getElementById('resDate').innerText;
    // --- PDF Styling ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(44, 62, 80); // Dark Blue
    doc.text("VIKAS EDUCATION", 105, 20, { align: "center" });

    doc.setFontSize(16);
    doc.setTextColor(39, 174, 96); // Green Color for Title
    doc.text("FEES PAYMENT RECEIPT", 105, 30, { align: "center" });

    doc.setLineWidth(0.5);// Horizontal Line
    doc.line(20, 35, 190, 35);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    let yPos = 50;
    doc.text(`Student Name:  ${name}`, 20, yPos);
    doc.text(`Payment ID:    ${pid}`, 20, yPos + 10);
    doc.text(`Amount Paid:   ${amt}`, 20, yPos + 20);
    doc.text(`Date:          ${date}`, 20, yPos + 30);
    doc.text(`Status:        VERIFIED ✅`, 20, yPos + 40);
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("This is a computer-generated receipt powerd by VikasEducation. Thank You", 105, 120, { align: "center" });
    // File Save karna
    doc.save(`Receipt_${name}.pdf`);
    alert("✅ PDF Receipt Downloaded Successfully!");
}
// Section 1 submit
// --- Section 1: Student Details Validation ---
function submitStudentDetails() {
    const name = document.getElementById('studentName');
    const email = document.getElementById('studentEmail');
    const mobile = document.getElementById('studentMobile');
    const aadhar = document.getElementById('aadharNo');
    const address = document.getElementById('studentAddress');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check individual field validity
    if (!name.value.trim() || !address.value.trim() || mobile.value.length !== 10 || 
        aadhar.value.length !== 12 || !emailRegex.test(email.value)) {
        alert("Please fill all Student Details correctly.");
        return;
    }

    // Success: Lock this section and unlock next
    const sec1 = document.getElementById('sec-student');
    const sec2 = document.getElementById('sec-docs');
    
    sec1.classList.add('section-success');
    sec1.style.pointerEvents = "none";
    sec1.style.opacity = "0.8";
    
    sec2.classList.remove('section-disabled');
    alert("✅ Student Details Verified! Now upload documents.");
}

// --- Section 2: Document Upload Validation ---
function submitDocDetails() {
    // Sirf is section ke file inputs check karein
    const fileInputs = document.querySelectorAll('#sec-docs input[type="file"]');
    let allUploaded = true;

    fileInputs.forEach(input => {
        if (input.files.length === 0) {
            allUploaded = false;
        }
    });

    if (!allUploaded) {
        alert("Please upload ALL 4 documents to proceed.");
        return;
    }

    // Success: Lock docs and unlock payment
    const sec2 = document.getElementById('sec-docs');
    const sec3 = document.getElementById('sec-payment');
    
    sec2.classList.add('section-success');
    sec2.style.pointerEvents = "none";
    sec2.style.opacity = "0.8";
    
    sec3.classList.remove('section-disabled');
    alert("✅ Documents Verified! Proceed to Payment.");
}

// --- Section 3: Final Payment Handler ---
function handleAdmissionSubmit(type) {
    const form = document.getElementById('admissionForm');
    
    if (!form.checkValidity()) {
        alert("Wait! Some fields are still empty or incorrect. Please check the form again.");
        form.reportValidity();
        return;
    }

    if (type === 'Offline') {
        alert("✅ Success! Your admission details have been submitted offline.");
        form.reset();
        location.reload(); // Page reset for new entry
    } else {
        // Online Mode: Set amount and show modal
        const amount = (type === 'University') ? "₹2000" : "₹5000";
        document.getElementById('payAmount').value = amount;
        document.getElementById('paymentPopupModal').style.display = 'flex';
    }
}
// Modify your existing handleAdmissionSubmit to handle final success
// Bas ek line add karni hogi final submit ke baad
// document.getElementById('sec-payment').classList.add('section-success');
// Global variable to track state
let isUnivPaid = false;
let currentPaymentType = ""; 

function handleAdmissionSubmit(type) {
    const form = document.getElementById('admissionForm');
    if (!form.checkValidity()) {
        alert("Wait! Some fields are still empty or incorrect.");
        form.reportValidity();
        return;
    }

    currentPaymentType = type; // Store current type (University or Tuition)

    if (type === 'Offline') {
        alert("Success!!! Your admission details have been submitted offline.");
        form.reset();
        location.reload();
    } else {
        const amount = (type === 'University') ? "₹2000" : "₹5000";
        document.getElementById('payAmount').value = amount;
        document.getElementById('paymentPopupModal').style.display = 'flex';
    }
}

// Receipt band hone par next step logic
function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';

    // Agar University fee bhari gayi hai
    if (currentPaymentType === 'University') {
        alert("Redirecting...Please wait a While!!!");
        
        setTimeout(() => {
            isUnivPaid = true;
            
            // 1. University Button ko disable aur dull karein
            const univBtn = document.getElementById('btnUniv');
            univBtn.disabled = true;
            univBtn.style.opacity = "0.5";
            univBtn.style.cursor = "not-allowed";
            univBtn.innerText = "University Fees Paid ✅";

            // 2. Tuition Button ko enable karein
            const tuitionBtn = document.getElementById('btnTuition');
            tuitionBtn.disabled = false;
            tuitionBtn.style.opacity = "1";
            tuitionBtn.style.cursor = "pointer";
            
            alert("Your tuition fee payment of ₹5000 is now open!");
        }, 2000); // 2 Seconds delay
    } 
    else if (currentPaymentType === 'Tuition') {
        alert("✅ All Fees Paid Successfully! Admission Process Complete.");
        document.getElementById('admissionForm').reset();
        location.reload();
    }
}
