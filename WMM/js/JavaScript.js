document.addEventListener('DOMContentLoaded', function () {
    let heroCurrentSlide = 0;
    const heroSlides = document.querySelectorAll('.hero-carousel-container .carousel-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const heroContainer = document.querySelector('.hero-carousel-container');

    function updateHeroCarousel() {
        heroContainer.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;
        heroDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === heroCurrentSlide);
        });
    }

    function changeHeroSlide(direction) {
        heroCurrentSlide = (heroCurrentSlide + direction + heroSlides.length) % heroSlides.length;
        updateHeroCarousel();
    }

    function goToHeroSlide(index) {
        heroCurrentSlide = index;
        updateHeroCarousel();
    }

    document.querySelector('.hero-prev').addEventListener('click', () => changeHeroSlide(-1));
    document.querySelector('.hero-next').addEventListener('click', () => changeHeroSlide(1));

    heroDots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToHeroSlide(parseInt(dot.dataset.index));
        });
    });

    setInterval(() => changeHeroSlide(1), 6000);
    updateHeroCarousel();
});






