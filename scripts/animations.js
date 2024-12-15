
function initAnimations() {
    // Scroll Progress
    const progressBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Fade Slide Elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    document.querySelectorAll('.fade-slide').forEach((el) => {
        observer.observe(el);
    });

    // Parallax Effect on Scroll
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-speed')) || 0.5;
            const offset = window.scrollY * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
    });
}

document.addEventListener('DOMContentLoaded', initAnimations);