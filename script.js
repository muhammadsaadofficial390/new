// Confetti Effect
document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.body;

    // Function to generate confetti
    function createConfetti() {
        const confettiCount = 200; // Number of confetti pieces
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
            confetti.style.top = `-${Math.random() * 100}px`;   // Start from top above the screen
            confettiContainer.appendChild(confetti);

            // Remove the confetti after animation ends
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    }

    // Generate confetti when the page loads
    createConfetti();
});

// Testimonial Slider
let currentIndex = 0;
const testimonials = document.getElementById('testimonial-slider');
const testimonialCount = testimonials.children.length;

function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonialCount;
    testimonials.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextTestimonial, 3000);
