document.addEventListener('DOMContentLoaded', () => {
    // Show music popup after a short delay
    setTimeout(() => {
        document.getElementById('music-popup').classList.remove('hidden');
    }, 1000);

    // Add scroll reveal animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

function playMusic() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.3; // Set initial volume to 30%
    audio.play()
        .then(() => {
            closePopup();
        })
        .catch(error => {
            console.log("Audio playback failed:", error);
        });
}

function closePopup() {
    document.getElementById('music-popup').classList.add('hidden');
}