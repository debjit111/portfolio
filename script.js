var typed = new Typed(".multiple-text", {
    strings: [ "Web Developer", "Programmer", "Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// Get the navbar element
const navbar = document.getElementById('header');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Check the page scroll position
    if (window.scrollY > 0) {
        // Add the 'scrolled' class when scrolled
        navbar.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class when at the top
        navbar.classList.remove('scrolled');
    }
});

// Add this to your script.js
document.addEventListener("DOMContentLoaded", () => {
    const achievements = document.querySelectorAll(".achievements");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.1 // Adjust as needed
    });

    achievements.forEach(achievement => {
        observer.observe(achievement);
    });
});

// Add this to your script.js file
document.addEventListener("DOMContentLoaded", () => {
    const collectionItems = document.querySelectorAll(".collections");

    const observerOptions = {
        threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a delay based on the index
                entry.target.style.setProperty("--delay", '${index * 0.2}s');
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    collectionItems.forEach(item => observer.observe(item));
});

// Function to animate the progress bar when it comes into view
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Progress bar is in view');
                const progress = entry.target.querySelector('.progress');
                const progressValue = entry.target.getAttribute('data-progress');
                progress.style.width = progressValue + '%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    progressBars.forEach(progressBar => {
        observer.observe(progressBar); // Start observing each progress bar
    });
}

// Call the function to start observing when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateProgressBars();
});