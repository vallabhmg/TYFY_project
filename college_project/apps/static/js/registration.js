// registration.js - Registration Page Specific JavaScript

// document.addEventListener("DOMContentLoaded", function() {

//     // Navbar Mobile Menu Toggle
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navLinks = document.getElementById('nav-list');

//     if (mobileMenu && navLinks) {
//         mobileMenu.addEventListener('click', function() {
//             navLinks.classList.toggle('active');
//             console.log("Registration Page: Mobile menu toggled");
//         });
//     }

//     // Registration Form Validation (Main function already in script.js)
//     // You can add extra enhancements here if needed

//     console.log("✅ Registration Page JavaScript Loaded Successfully");
// });

document.addEventListener("DOMContentLoaded", function() {
    const regForm = document.getElementById('regForm');

document.getElementById('payAmount').value = "₹ 200.00";

    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            validateAndOpenPayment();
        });
    }
});

function validateAndOpenPayment() {
     // 1. Get Values
            const firstName = document.getElementById('firstName').value.trim();
            const middleName = document.getElementById('middleName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const phone = document.getElementById('regPhone').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const course = document.getElementById('courseSelect').value;
            const pass = document.getElementById('createPass').value;
            const confirmPass = document.getElementById('confirmPass').value;

            // Regex Patterns
            const namePattern = /^[A-Za-z\s]+$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // 2. Validations
            
            // Check Empty Fields
            if (!firstName || !lastName || !phone || !email || !course || !pass || !confirmPass) {
                alert("Error: Fill Entire form & submit it.");
                e.preventDefault();
                return;
            }

            // Name Validation (Alphabets only)
            if (!namePattern.test(firstName) || (middleName && !namePattern.test(middleName)) || !namePattern.test(lastName)) {
                alert(" Error:Enter Valid Name.");
                e.preventDefault();
                return;
            }

            // Phone Validation (10 Digits)
            if (phone.length !== 10 || isNaN(phone)) {
                alert("Error:Enter Contact Number 10 digits.");
                e.preventDefault();
                return;
            }

            // Email Validation
            if (!emailPattern.test(email)) {
                alert("❌ Error: Please enter a proper email address.");
                e.preventDefault();
                return;
            }

            // Password Match Validation
            if (pass !== confirmPass) {
                alert("❌ Error: Password and Confirm Password must be the same.");
                e.preventDefault();
                return;
            }

    // Agar sab sahi hai, toh Payment Modal kholein
    document.getElementById('payFullName').value = firstName + " " + lastName;
    document.getElementById('payEmailID').value = email;
    document.getElementById('paymentPopupModal').style.display = 'flex';
}

// Step 2: Payment Modal Cancel (Reset Form)
function closePaymentModal() {
    if(confirm("Cancelling payment will reset your form. Are you sure?")) {
        document.getElementById('paymentPopupModal').style.display = 'none';
        document.getElementById('regForm').reset(); // User must fill again
    }
}

// Step 3: Final Payment Process
function finalPayProcess() {
    const name = document.getElementById('payFullName').value.trim();
    const email = document.getElementById('payEmailID').value.trim();

    if (!name || !email) {
        alert("Please fill payment details.");
        return;
    }

    // Payment success logic simulate karein
    document.getElementById('paymentPopupModal').style.display = 'none';
    
    // Receipt Modal mein data bharein
    document.getElementById('resName').innerText = name;
    document.getElementById('resID').innerText = email;
    document.getElementById('resAmount').innerText = "₹ 200.00";
    document.getElementById('resDate').innerText = new Date().toLocaleDateString();
    
    document.getElementById('receiptModal').style.display = 'flex';
}

// Step 4: Close Receipt & Submit to Backend
function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';
    alert("Payment Verified! Submitting your registration...");
    
    // Ab form ko asliyat mein submit karein
    document.getElementById('regForm').submit(); 
}

// Receipt Download (Basic Alert)
// function downloadReceipt() {
//     alert("Downloading Receipt PDF...");
//     // Yahan aap window.print() ya koi PDF library use kar sakte hain
// }

async function downloadReceipt() {
    try {
        // Check if library is loaded
        if (!window.jspdf) {
            alert("Error: PDF Library not loaded. Please check your internet connection.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Data fetch karna receipt modal se
        const name = document.getElementById('resName').innerText || "Student";
        const pid = document.getElementById('resID').innerText || "N/A";
        const amt = document.getElementById('resAmount').innerText || "0";
        const date = document.getElementById('resDate').innerText || new Date().toLocaleDateString();

        // --- PDF Design ---
        doc.setFillColor(245, 245, 245);
        doc.rect(0, 0, 210, 297, 'F'); // Background color

        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(44, 62, 80); 
        doc.text("VIKAS EDUCATION", 105, 30, { align: "center" });

        doc.setFontSize(14);
        doc.setTextColor(39, 174, 96);
        doc.text("OFFICIAL FEES RECEIPT", 105, 40, { align: "center" });

        doc.setLineWidth(0.5);
        doc.line(20, 45, 190, 45);

        // Details
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");

        let y = 60;
        doc.text(`Student Name:    ${name}`, 25, y);
        doc.text(`Transaction ID:  ${pid}`, 25, y + 10);
        doc.text(`Amount Paid:     ${amt}`, 25, y + 20);
        doc.text(`Date of Payment: ${date}`, 25, y + 30);
        doc.text(`Payment Status:  VERIFIED SUCCESSFUL`, 25, y + 40);

        // Border and Footer
        doc.setDrawColor(39, 174, 96);
        doc.rect(15, 15, 180, 100); // Ek box banayega receipt ke charo taraf

        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text("This is a system generated document. No signature required.", 105, 105, { align: "center" });

        // Save File
        doc.save(`Fees_Receipt_${name.replace(/\s+/g, '_')}.pdf`);
        
    } catch (error) {
        console.error("PDF Error:", error);
        alert("Something went wrong while generating PDF.");
    }
}

// 5. Toggle Password Visibility Function
function togglePass(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}