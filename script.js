 // Function to check if the screen is mobile size (adjust the breakpoint as needed, 768px is a common mobile breakpoint)
 function isMobile() {
    return window.innerWidth <= 768;
}



// Create an intersection observer for service and section animations
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            if (isMobile()) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn', 'animated');
            } else {
                entry.target.classList.add('animate__animated', 'animate__zoomIn', 'animated');
            }
        } else {
            entry.target.classList.remove('animate__animated', 'animate__fadeIn', 'animate__zoomIn', 'animated');
        }
    });
}, {
    threshold: 0.1
});

// Observe service elements and sections
document.querySelectorAll('.service, .section').forEach(function (element) {
    observer.observe(element);
});

// Optional: Listen for window resize to apply changes dynamically if the screen size changes
$(window).resize(function () {
    if (isMobile()) {
        // Logic to adjust layout or animations for mobile if needed during resize
    } else {
        // Logic for desktop
    }
});
