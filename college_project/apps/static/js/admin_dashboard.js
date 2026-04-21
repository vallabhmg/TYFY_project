
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

// ====================== ADMIN DASHBOARD TAB SWITCHING ======================

// ====================== ADMIN DASHBOARD TAB SWITCHING ======================

function switchTab(tabName) {
    // Hide all sections
    const sections = [
        'dashboard', 'attendance', 'offline-fees', 'result', 
        'ebook', 'question-papers', 'change-password'
    ];
    
    sections.forEach(sec => {
        const element = document.getElementById('section-' + sec);
        if (element) {
            element.style.display = (sec === tabName) ? 'block' : 'none';
        }
    });

    // Hide dynamic form when switching sidebar tabs
    const formArea = document.getElementById('dynamic-form-area');
    if (formArea) formArea.style.display = 'none';
}

// ====================== QUICK ACTION FORMS ======================
function showForm(type) {
    const formArea = document.getElementById('dynamic-form-area');
    let html = '';

    if (type === 'news') {
        html = `
            <div class="dynamic-form">
                <h2>📰 Publish Announcement</h2>
                <div class="form-group">
                    <label>News Title</label>
                    <input type="text" id="news-title" placeholder="e.g. Exam Schedule 2026">
                </div>
                <div class="form-group">
                    <label>Publish Date</label>
                    <input type="date" id="news-date">
                </div>
                <div class="form-group">
                    <label>Description Details</label>
                    <textarea id="news-desc" placeholder="Write full announcement here..."></textarea>
                </div>
                <div class="form-actions">
                    <button onclick="submitNews()" class="btn-submit">Publish Now</button>
                    <button onclick="hideForm()" class="btn-cancel">Cancel</button>
                </div>
            </div>
        `;
    } 
    else if (type === 'courses') {
        html = `
            <div class="dynamic-form">
                <h2>📚 Create New Course</h2>
                <div class="form-group">
                    <label>Course Name</label>
                    <input type="text" id="course-name" placeholder="e.g. Full Stack Web Development">
                </div>
                <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <label>Course Code</label>
                        <input type="text" id="course-code" placeholder="WEB-101">
                    </div>
                    <div>
                        <label>Duration</label>
                        <input type="text" placeholder="e.g. 6 Months">
                    </div>
                </div>
                <div class="form-group">
                    <label>Course Description</label>
                    <textarea id="course-desc" placeholder="What students will learn..."></textarea>
                </div>
                <div class="form-actions">
                    <button onclick="submitCourse()" class="btn-submit">Add Course</button>
                    <button onclick="hideForm()" class="btn-cancel">Cancel</button>
                </div>
            </div>
        `;
    } 
    else if (type === 'events') {
        html = `
            <div class="dynamic-form">
                <h2>🎉 Schedule New Event</h2>
                <div class="form-group">
                    <label>Event Title</label>
                    <input type="text" id="event-name" placeholder="e.g. Annual Tech Fest">
                </div>
                <div class="form-group">
                    <label>Date & Time</label>
                    <input type="datetime-local" id="event-datetime">
                </div>
                <div class="form-group">
                    <label>Event Location / Virtual Link</label>
                    <input type="text" id="event-location" placeholder="e.g. Seminar Hall or Zoom Link">
                </div>
                <div class="form-group">
                    <label>Event Brief</label>
                    <textarea id="event-desc" style="min-height: 80px;" placeholder="What is this event about?"></textarea>
                </div>
                <div class="form-actions">
                    <button onclick="submitEvent()" class="btn-submit">Schedule Event</button>
                    <button onclick="hideForm()" class="btn-cancel">Cancel</button>
                </div>
            </div>
        `;
    }
    
    formArea.innerHTML = html;
    formArea.style.display = 'block';
    document.getElementById('default-message').style.display = 'none';
    
    // Smooth scrolling to form on mobile
    if(window.innerWidth < 768) {
        formArea.scrollIntoView({ behavior: "smooth" });
    }
}

function hideForm() {
    const formArea = document.getElementById('dynamic-form-area');
    formArea.style.display = 'none';
    document.getElementById('default-message').style.display = 'block';
}

// Example Submit Functions (You can connect with backend later)
function submitNews() {
    alert("✅ News Published Successfully!");
    hideForm();
}

function submitCourse() {
    alert("✅ Course Added Successfully!");
    hideForm();
}

function submitEvent() {
    alert("✅ Event Created Successfully!");
    hideForm();
}

