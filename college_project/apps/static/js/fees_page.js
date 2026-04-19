

let currentPaymentType = ""; // To track if we are paying Univ or Tuition

// 1. Toggle Online / Offline
function togglePaymentButtons(mode) {
    const onlineGroup = document.getElementById('onlinePayGroup');
    const offlineGroup = document.getElementById('offlineSubmitGroup');
    
    if (mode === 'offline') {
        onlineGroup.style.display = "none";
        offlineGroup.style.display = "block";
    } else {
        onlineGroup.style.display = "block";
        offlineGroup.style.display = "none";
    }
}

// 2. Submit Student Details (Unlock Docs)
function submitStudentDetails() {
    const fields = ['studentName', 'studentAddress', 'studentMobile', 'parentMobile', 'studentEmail', 'aadharNo'];
    let valid = true;
    
    fields.forEach(id => {
        if (!document.getElementById(id).value.trim()) valid = false;
    });

    if (!valid || document.getElementById('studentMobile').value.length < 10 || document.getElementById('aadharNo').value.length < 12) {
        alert("❌ Please fill all Student Details correctly (Mobile 10 digits, Aadhaar 12 digits).");
        return;
    }

    // Lock Section 1, Unlock Section 2
    document.getElementById('sec-student').classList.add('section-success-locked');
    document.getElementById('sec-docs').classList.remove('section-disabled');
    alert("✅ Student Details Saved. Please upload documents.");
}

// 3. Submit Documents (Unlock Payment)

function submitDocDetails() {
    const files = document.querySelectorAll('#sec-docs input[type="file"]');
    let allUploaded = true;
    files.forEach(f => { if(f.files.length === 0) allUploaded = false; });

    if (!allUploaded) {
        alert("❌ Please upload all required documents.");
        return;
    }

    // 1. Hide Button and Show Timer
    const verifyBtn = document.getElementById('btnVerifyDocs');
    const timerDiv = document.getElementById('verificationTimer');
    const timerClock = document.getElementById('timerClock');
    
    verifyBtn.style.display = "none";
    timerDiv.style.display = "block";

    let timeRemaining = 5 * 60; // 5 minutes in seconds

    // 2. Start Countdown
    const countdown = setInterval(function() {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;

        // Formatting (e.g., 04:09)
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerClock.innerText = `0${minutes}:${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            completeVerification(); // Timer khatam hone par next step
        }
        timeRemaining--;
    }, 1000);

    alert("⌛ Documents submitted! Admin is verifying your documents. Please wait for 5 minutes.");
}

// Function to unlock payment after timer
function completeVerification() {
    // Hide timer div
    document.getElementById('verificationTimer').style.display = "none";
    
    // Standard locking/unlocking logic
    document.getElementById('sec-docs').classList.add('section-success-locked');
    document.getElementById('sec-payment').classList.remove('section-disabled');
    
    alert("✅ Documents Verified by Admin! You can now proceed to Payment.");
}
// 4. Handle Payment Button Clicks
function handleAdmissionSubmit(type) {
    currentPaymentType = type;
    const amount = (type === 'University') ? "₹2000" : "₹5000";
    
    // Auto-fill payment modal with student info
    document.getElementById('payFullName').value = document.getElementById('studentName').value;
    document.getElementById('payEmailID').value = document.getElementById('studentEmail').value;
    document.getElementById('payAmount').value = amount;
    
    document.getElementById('paymentPopupModal').style.display = 'flex';
}

// 5. Final Pay Process (Show Receipt)
function finalPayProcess() {
    const name = document.getElementById('payFullName').value;
    const email = document.getElementById('payEmailID').value;

    if (!name || !email) {
        alert("Please enter payment details.");
        return;
    }

    document.getElementById('resName').innerText = name;
    document.getElementById('resID').innerText = email;
    document.getElementById('resAmount').innerText = document.getElementById('payAmount').value;
    document.getElementById('resDate').innerText = new Date().toLocaleDateString();

    document.getElementById('paymentPopupModal').style.display = 'none';
    document.getElementById('receiptModal').style.display = 'flex';
}

// 6. Close Receipt and Handle Next Step (Crucial Requirement)
function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';
    
    if (currentPaymentType === "University") {
        alert("✅ University Fees Paid! Now please pay Tuition Fees.");
        document.getElementById('btnUniv').disabled = true;
        document.getElementById('btnUniv').style.opacity = "0.5";
        document.getElementById('btnUniv').innerText = "University Fees Paid ✔";
        document.getElementById('btnTuition').disabled = false; // Unlock next button
    } 
    else if (currentPaymentType === "Tuition") {
        alert("✅ Tuition Fees Paid! You can now submit your final application.");
        document.getElementById('btnTuition').disabled = true;
        document.getElementById('btnTuition').style.opacity = "0.5";
        document.getElementById('btnTuition').innerText = "Tuition Fees Paid ✔";
        document.getElementById('btnFinalSubmit').disabled = false; // Unlock final submit
    }
}

// 7. Final Submission logic
function finalSubmission(mode = 'Online') {
    alert(`🎉 Success! Admission for ${document.getElementById('studentName').value} has been submitted successfully (${mode}).`);
    location.reload(); 
}

function closePaymentModal() {
    document.getElementById('paymentPopupModal').style.display = 'none';
}

// Download PDF (Same as your code)
// async function downloadReceipt() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     const name = document.getElementById('resName').innerText;
//     doc.text("VIKAS EDUCATION - RECEIPT", 105, 20, { align: "center" });
//     doc.text(`Name: ${name}`, 20, 40);
//     doc.text(`ID: ${document.getElementById('resID').innerText}`, 20, 50);
//     doc.text(`Amount: ${document.getElementById('resAmount').innerText}`, 20, 60);
//     doc.save(`Receipt_${name}.pdf`);
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