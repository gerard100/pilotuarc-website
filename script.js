const images = [
    'url("./dorm-1.jpg")',
    'url("./project.jpg")',
    'url("./girls.jpg")',
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
