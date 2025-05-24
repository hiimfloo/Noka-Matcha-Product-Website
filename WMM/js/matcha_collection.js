const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 429}px)`;
}

function autoPlay() {
    index = (index + 1) % images.length;
    updateCarousel();
}

updateCarousel();
setInterval(autoPlay, 4000); // autoplay every 4 seconds