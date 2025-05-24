document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("main-product-img");
    const productName = document.getElementById("product-name");
    const productKcal = document.getElementById("product-kcal");
    const productDesc = document.getElementById("product-desc");

    const slideLeft = document.getElementById("slide-left");
    const slideRight = document.getElementById("slide-right");
    const thumbnailSlider = document.getElementById("thumbnail-slider");

    thumbnails.forEach((thumb) => {
        thumb.addEventListener("click", () => {
            // Update main image and content
            mainImage.src = thumb.src;
            productName.textContent = thumb.dataset.name;
            productKcal.textContent = thumb.dataset.kcal;
            productDesc.textContent = thumb.dataset.desc;

            // Highlight selected
            thumbnails.forEach((t) => t.classList.remove("selected"));
            thumb.classList.add("selected");
        });
    });

    slideLeft.addEventListener("click", () => {
        // Prevent over-scrolling left
        if (thumbnailSlider.scrollLeft > 0) {
            thumbnailSlider.scrollBy({ left: -100, behavior: "smooth" });
        } else {
            // Optional: loop to the end
            thumbnailSlider.scrollLeft = thumbnailSlider.scrollWidth;
        }
    });

    slideRight.addEventListener("click", () => {
        const maxScrollLeft = thumbnailSlider.scrollWidth - thumbnailSlider.clientWidth;

        if (thumbnailSlider.scrollLeft < maxScrollLeft) {
            thumbnailSlider.scrollBy({ left: 100, behavior: "smooth" });
        } else {
            // Optional: loop back to start
            thumbnailSlider.scrollLeft = 0;
        }
    });
});