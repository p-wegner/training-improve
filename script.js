// Toggle details for topics
function toggleDetails(id) {
    const details = document.getElementById(id);
    details.classList.toggle('active');
}

// Quote carousel
document.addEventListener('DOMContentLoaded', function() {
    const quotes = document.querySelectorAll('.quote');
    let currentQuote = 0;
    
    // Show first quote
    quotes[0].classList.add('active');
    
    // Rotate quotes every 5 seconds
    setInterval(() => {
        quotes[currentQuote].classList.remove('active');
        currentQuote = (currentQuote + 1) % quotes.length;
        quotes[currentQuote].classList.add('active');
    }, 5000);
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects for day containers
const dayContainers = document.querySelectorAll('.day-container');
dayContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
        this.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
    });
    
    container.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
    });
});
