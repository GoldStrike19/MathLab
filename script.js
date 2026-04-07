// Check if script is connected
console.log("MathLab script.js is connected!");

function showPage(pageName, btn) {
    console.log("Attempting to show page: " + pageName);
    
    // 1. Hide all pages
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(p) {
        p.classList.remove('active');
    });

    // 2. Deactivate all nav buttons
    var buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(function(b) {
        b.classList.remove('active');
    });

    // 3. Show the correct page
    var target = document.getElementById('page-' + pageName);
    if (target) {
        target.classList.add('active');
        btn.classList.add('active');
        console.log("Page switched successfully.");
    } else {
        console.error("Error: Could not find page-id: page-" + pageName);
    }
}

// ... Keep all your other math functions (solveEq, calcHyp, etc.) exactly as they were below this ...