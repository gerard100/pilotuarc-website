const images = [
    'url("img-1.jpg")',
    'url("img-2.jpg")',
    'url("/img-3.jpg")',
    // Add more images as needed
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Change background image every 3 seconds
setInterval(changeBackground, 3000);

// Set the initial background image
changeBackground();
