// Fetch multiple dog images (e.g., 5 images)
async function fetchDogImages() {
    const dogImagesContainer = document.getElementById('dog-images-container');
    dogImagesContainer.innerHTML = ''; // Clear previous images

    for (let i = 0; i < 5; i++) {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const imgElement = document.createElement('img');
        imgElement.src = data.message;
        imgElement.classList.add('selectable-img');
        imgElement.onclick = () => selectDogImage(data.message); // Set onclick event to select this image
        dogImagesContainer.appendChild(imgElement);
    }
}

// Fetch multiple cat images (e.g., 5 images)
async function fetchCatImages() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
    const data = await response.json();
    const catImagesContainer = document.getElementById('cat-images-container');
    catImagesContainer.innerHTML = ''; // Clear previous images

    data.forEach(cat => {
        const imgElement = document.createElement('img');
        imgElement.src = cat.url;
        imgElement.classList.add('selectable-img');
        imgElement.onclick = () => selectCatImage(cat.url); // Set onclick event to select this image
        catImagesContainer.appendChild(imgElement);
    });
}

// Set selected dog image for battle
function selectDogImage(imgSrc) {
    document.getElementById('dog-img').src = imgSrc;
}

// Set selected cat image for battle
function selectCatImage(imgSrc) {
    document.getElementById('cat-img').src = imgSrc;
}

// Fetch the images on page load
fetchDogImages();
fetchCatImages();