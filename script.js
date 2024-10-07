const reviewsContainer = document.querySelector('.reviews-container');
const dots = document.querySelectorAll('.dot');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
let currentIndex = 0; // To track which review is visible

// Function to update the visible review and active dot
function updateCarousel(index) {
    const cardWidth = document.querySelector('.review-card').offsetWidth + 20; // Card width + margin
    reviewsContainer.style.transform = `translateX(${-cardWidth * index}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Event listeners for dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        updateCarousel(index);
        currentIndex = index;
    });
});

// Event listeners for navigation buttons
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dots.length; // Wrap around
    updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length; // Wrap around
});



// Function to open the modal
// Function to open the modal
// Function to open the modal
// Function to open the modal
