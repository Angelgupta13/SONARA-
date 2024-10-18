document.addEventListener('DOMContentLoaded', function() {
    const demoAnimation = document.getElementById('demo-animation');
    const words = ['Hello', 'Thank you', 'How are you?', 'Nice to meet you'];
    let currentIndex = 0;

    function animateWords() {
        demoAnimation.style.opacity = 0;
        setTimeout(() => {
            demoAnimation.textContent = words[currentIndex];
            demoAnimation.style.opacity = 1;
            currentIndex = (currentIndex + 1) % words.length;
        }, 500);
    }

    setInterval(animateWords, 3000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (you can replace this with your own backend logic)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});