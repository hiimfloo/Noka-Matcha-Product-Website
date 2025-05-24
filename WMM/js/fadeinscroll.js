document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.scroll-fade-in');

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.1
    });

    faders.forEach(el => {
        appearOnScroll.observe(el);
    });
});
