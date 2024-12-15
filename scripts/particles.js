class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(110, 231, 183, ${Math.random() * 0.5})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > this.canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const particlesContainer = document.getElementById('particles');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesContainer.appendChild(canvas);

    const particles = Array.from({ length: 50 }, () => new Particle(canvas));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

document.addEventListener('DOMContentLoaded', initParticles);