// Dog images for the gallery
const dogImages = [
    'https://placedog.net/500/280', // Placeholder image 1
    'https://placedog.net/500/281',   // Placeholder image 2
    'https://placedog.net/500/282',  // Placeholder image 3
    'https://placedog.net/500/283', // Placeholder image 4
    'https://placedog.net/500/284'  // Placeholder image 5
];

// Function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to update the gallery with shuffled images
function updateGallery() {
    shuffleArray(dogImages);

    const galleryContainer = document.getElementById('dogGallery');
    galleryContainer.innerHTML = '';

    dogImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Dog Image';
        galleryContainer.appendChild(imgElement);
    });
}

// Initial update of the gallery
updateGallery();

// Set interval to update the gallery every 5 seconds
setInterval(updateGallery, 5000);
