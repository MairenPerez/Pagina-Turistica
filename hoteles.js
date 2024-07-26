document.addEventListener('DOMContentLoaded', function() {
    const hotelCards = document.querySelectorAll('.hotel-card');

    hotelCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.2)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
        });
    });
});
