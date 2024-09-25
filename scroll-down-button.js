// Function to check if the screen is mobile size (adjust the breakpoint as needed, 768px is a common mobile breakpoint)
function isMobile() {
  return window.innerWidth <= 768;
}

// Scroll effect for service elements and sticky navbar (optimized with a single scroll listener)
$(window).scroll(function() {
  const windowTop = $(window).scrollTop();

  // Animation logic for services
  $('.service').each(function() {
    var position = $(this).offset().top;
    
    if (isMobile()) {
      if (position < windowTop + 300) {
        $(this).addClass("animate__animated animate__fadeIn");
      }
    } else {
      if (position < windowTop + 600) {
        $(this).addClass("animate__animated animate__zoomIn");
      }
    }
  });
});

// Create an intersection observer for section animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (isMobile()) {
        entry.target.classList.add('animate__animated', 'animate__fadeIn', 'animated');
      } else {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp', 'animated');
      }
    } else {
      entry.target.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__fadeIn', 'animated');
    }
  });
}, {
  threshold: 0.1
});

// Observe sections
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});


// Optional: Listen for window resize to apply changes dynamically if the screen size changes
$(window).resize(function() {
  if (isMobile()) {
    // Logic to adjust layout or animations for mobile if needed during resize
  } else {
    // Logic for desktop
  }
});
