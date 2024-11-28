// Your JavaScript code goes here
function myFunction() {
    // ...
}

// Fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    // Initial fade in
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(element => {
            element.classList.add('visible');
        });
    }, 100);

    // Modified Scroll fade in
    const observerOptions = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

// Parallax effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.main-section');
    parallaxElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        // Only apply parallax if element is visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            element.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
    });
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    function updateCarousel() {
        const offset = -currentIndex * (items[0].offsetWidth + 20); // 20 is the gap
        carousel.style.transform = `translateX(${offset}px)`;
    }
});

// ... rest of your JavaScript ... 