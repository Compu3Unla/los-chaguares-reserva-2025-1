document.addEventListener("DOMContentLoaded", () => {
    const carousel   = document.getElementById("heroCarousel");
    const track      = carousel.querySelector(".slides");
    const slides     = carousel.querySelectorAll(".slide");
    const prevBtn    = carousel.querySelector(".carousel-btn-prev");
    const nextBtn    = carousel.querySelector(".carousel-btn-next");

    let index = 0;
    const total = slides.length;

    function update() {
        const slideWidth = carousel.clientWidth; 
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + total) % total;
        update();
    });

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % total;
        update();
    });

    window.addEventListener('resize', () => {
        update();
    });

    update();
});