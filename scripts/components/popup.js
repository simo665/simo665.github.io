// Music popup functionality
export class MusicPopup {
    constructor() {
        this.popup = document.getElementById('music-popup');
        this.audio = document.getElementById('bgMusic');
    }

    show() {
        this.popup.classList.remove('hidden');
        this.popup.querySelector('.popup-content').classList.add('animate__zoomIn');
    }

    hide() {
        this.popup.querySelector('.popup-content').classList.remove('animate__zoomIn');
        this.popup.querySelector('.popup-content').classList.add('animate__zoomOut');
        setTimeout(() => {
            this.popup.classList.add('hidden');
        }, 500);
    }

    playMusic() {
        this.audio.volume = 0.3;
        return this.audio.play();
    }
}