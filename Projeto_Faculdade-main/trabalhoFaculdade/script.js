document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4000, // Tempo entre os slides (3s)
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: false, // REMOVE AS SETAS
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const h2Elements = document.querySelectorAll("h2");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    h2Elements.forEach(h2 => {
        observer.observe(h2);
    });
});
