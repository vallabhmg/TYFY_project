// digital_id.js - Digital ID Card Specific Logic

// Verify ID and show Digital Card
function verifyAndShowID() {
    const idVal = document.getElementById('idNumInput').value.trim();
    const passVal = document.getElementById('idPassInput').value.trim();

    if (idVal === "" || passVal === "") {
        alert("Please enter both College ID and Security Password.");
        return;
    }

    if (passVal === "12345") {
        document.getElementById('id-login-box').style.display = 'none';
        document.getElementById('display-id-val').innerText = idVal.toUpperCase();
        document.getElementById('final-id-card').style.display = 'block';
        setTimeout(() => {
            document.getElementById('final-id-card').scrollIntoView({ behavior: "smooth" });
        }, 100);
        console.log("Digital ID Generated for:", idVal);
    } else {
        alert("Invalid Security Password! Please use: 12345");
        document.getElementById('idPassInput').focus();
    }
}

// Reset and generate new ID
function resetIdPortal() {
    document.getElementById('id-login-box').style.display = 'block';
    document.getElementById('final-id-card').style.display = 'none';
    
    // Clear inputs
    document.getElementById('idNumInput').value = "";
    document.getElementById('idPassInput').value = "";
    
    console.log("Digital ID Portal Reset");
}

// Initialize when included
document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ Digital ID Section JavaScript Loaded");
});