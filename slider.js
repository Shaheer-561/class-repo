let currentIndex = 0;
const slides = document.querySelectorAll('.carousel .items');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;
let autoSlideInterval;

// Show the next slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Show the previous slide
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Update the slide position based on currentIndex
function updateSlidePosition() {
    document.querySelector('.carousel .list').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Start auto-sliding every 5 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 5000);
}

// Stop auto-sliding when user manually clicks the prev/next buttons
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners for prev/next buttons
document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    showPrevSlide();
});

document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    showNextSlide();
});

// Initialize auto-slide when page loads
window.onload = startAutoSlide;

// Link button to new page for Links button
const linksButton = document.querySelector('.items:nth-child(1) .button.secondary');
if (linksButton) {
    linksButton.addEventListener('click', () => {
        window.location.href = "linksShaheer.html"; // Navigate to linksShaheer.html
    });
} else {
    console.error("Links button not found.");
}

// Link button to new page for See More button in Shaheer's container
const seeMoreShaheerButton = document.querySelector('.items:nth-child(1) .button');
if (seeMoreShaheerButton) {
    seeMoreShaheerButton.addEventListener('click', () => {
        window.location.href = "seeMoreShaheer.html"; // Navigate to seeMoreShaheer.html
    });
} else {
    console.error("See More button not found.");
}
