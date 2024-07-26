// Swiper initialization
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});

// SERVICIOS 
// DOMContentLoaded event listener for service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    
});
