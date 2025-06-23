document.addEventListener("DOMContentLoaded", () => {
    console.log("reviews-carousel.js: DOMContentLoaded - Iniciando script.");

    const reviewscarousel = document.getElementById("reviewscarousel");
    const slides = reviewscarousel.querySelectorAll(".review-slide");
    const dotsContainer = reviewscarousel.querySelector(".reviews-dots-container");
    const dots = []; // Array para guardar las referencias a los puntos creados

    let currentSlide = 0;
    const slideInterval = 20000; // 20 segundos (20000 milisegundos)
    let intervalId; // Para almacenar el ID del intervalo y poder limpiarlo

    // 1. Inicializar los puntos de navegación (crearlos dinámicamente)
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add("review-dot");
        dot.dataset.index = index; // Guarda el índice del slide al que corresponde el punto
        dotsContainer.appendChild(dot);
        dots.push(dot);

        // Agrega un evento click a cada punto para ir a ese slide
        dot.addEventListener("click", () => {
            console.log("reviews-carousel.js: Punto clicado, yendo al slide:", index);
            goToSlide(index);
            resetInterval(); // Reinicia el temporizador si el usuario interactúa
        });
    });

    // 2. Función para mostrar un slide específico (maneja el fade)
    function showSlide(indexToShow) {
        // Asegurarse de que el índice esté dentro del rango
        const normalizedIndex = (indexToShow + slides.length) % slides.length;
        
        // Oculta todos los slides y remueve la clase 'active' de todos los puntos
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        // Muestra el slide actual y activa el punto correspondiente
        slides[normalizedIndex].classList.add("active");
        dots[normalizedIndex].classList.add("active");

        currentSlide = normalizedIndex; // Actualiza el slide actual
        console.log("reviews-carousel.js: Mostrando slide:", currentSlide);
    }

    // 3. Función para ir al siguiente slide
    function nextSlide() {
        console.log("reviews-carousel.js: Cambiando al siguiente slide.");
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // 4. Función para ir a un slide específico (útil para los puntos)
    function goToSlide(index) {
        showSlide(index);
    }

    // 5. Iniciar la reproducción automática
    function startAutoSlide() {
        console.log("reviews-carousel.js: Iniciando deslizamiento automático. Intervalo:", slideInterval / 2000, "segundos.");
        intervalId = setInterval(nextSlide, slideInterval);
    }

    // 6. Reiniciar el temporizador (útil si el usuario interactúa o si el carrusel se inicializa)
    function resetInterval() {
        console.log("reviews-carousel.js: Reiniciando intervalo (clearInterval).");
        clearInterval(intervalId); // Limpia el intervalo existente
        startAutoSlide(); // Inicia uno nuevo
    }

    // 7. Event listener para la redirección al hacer clic en cualquier parte del slide
    // Se adjunta al contenedor principal del carrusel de reseñas
    reviewscarousel.addEventListener("click", () => {
        console.log("reviews-carousel.js: Clic en el carrusel, redirigiendo a Tripadvisor.");
        window.open("https://www.tripadvisor.com.ar/Attraction_Review-g6513424-d7981092-Reviews-Reserva_Natural_Los_Chaguares-Colonia_Benitez_Province_of_Chaco_Litoral.html", "_blank");
    });

    // Inicializar el carrusel al cargar la página
    if (slides.length > 0) { // Asegurarse de que haya slides antes de iniciar
        showSlide(currentSlide); // Muestra el primer slide al cargar la página
        startAutoSlide(); // Inicia la reproducción automática
    } else {
        console.warn("reviews-carousel.js: No se encontraron slides de reseñas. El carrusel no se inicializará.");
    }
});