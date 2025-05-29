 // === NAVIGATION DROPDOWNS ===
    document.addEventListener("DOMContentLoaded", function () {
        const dropdowns = document.querySelectorAll(".nav-dropdown");

        dropdowns.forEach(drop => {
            const btn = drop.querySelector(".dropbtn");
    const content = drop.querySelector(".dropdown-content");

    btn.addEventListener("click", function (e) {
        e.stopPropagation();
    closeAllDropdowns();
    content.classList.toggle("show");
            });
        });

    function closeAllDropdowns() {
        document.querySelectorAll(".dropdown-content").forEach(menu => {
            menu.classList.remove("show");
        });
        }

    document.addEventListener("click", function () {
        closeAllDropdowns();
        });
    });

    // === FADE-IN ON SCROLL ===
    window.addEventListener("DOMContentLoaded", () => {
        const faders = document.querySelectorAll(".recipe-card, .recipe-title, .video-embed-area");

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
        });
        }, {
        threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
        });

        faders.forEach(fader => {
        fader.classList.add("fade-in-init");
    appearOnScroll.observe(fader);
        });
    });
