import { MusicPopup } from './components/popup.js';

document.addEventListener('DOMContentLoaded', () => {
    const musicPopup = new MusicPopup();
    
    // Show music popup after a short delay
    setTimeout(() => musicPopup.show(), 1000);

    // Initialize scroll animations
    initScrollAnimations();
});

// Global functions for HTML onclick handlers
window.playMusic = function() {
    const musicPopup = new MusicPopup();
    musicPopup.playMusic()
        .then(() => musicPopup.hide())
        .catch(error => console.error("Audio playback failed:", error));
};

window.closePopup = function() {
    const musicPopup = new MusicPopup();
    musicPopup.hide();
};

function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}