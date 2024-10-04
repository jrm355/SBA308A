//This file is to get the scroll wheel gallery, and button logic
// Fetch multiple dog images 
async function fetchDogImages() {
    const dogImagesContainer = document.getElementById('dog-images-container');
    dogImagesContainer.innerHTML = ''; 

    for (let i = 0; i < 10; i++) {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const imgElement = document.createElement('img');
        imgElement.src = data.message;
        imgElement.classList.add('selectable-img');
        imgElement.onclick = () => selectDogImage(data.message); // Set onclick event to select this image
        dogImagesContainer.appendChild(imgElement);
    }
}

// Fetch multiple cat images
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

//  selected dog image for battle
function selectDogImage(imgSrc) {
    document.getElementById('dog-img').src = imgSrc;
}

//  selected cat image for battle
function selectCatImage(imgSrc) {
    document.getElementById('cat-img').src = imgSrc;
}

//  random stats for both the cat and dog
function generateRandomStats() {
    return Math.floor(Math.random() * 100) + 1; // Random stat between 1 and 100
}

//  winner
function displayWinner(winner) {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.textContent = winner + " Wins!";
    winnerDiv.classList.remove('hidden');
}

// clear stats and reset UI for the next fight
function resetFight() {
    document.getElementById('dog-stats').textContent = 'Stats: ';
    document.getElementById('cat-stats').textContent = 'Stats: ';
    document.getElementById('winner').classList.add('hidden'); // Hide the winner announcement
}

// verses button logic
document.getElementById('verses-btn').addEventListener('click', function() {
    const dogStat = generateRandomStats();
    const catStat = generateRandomStats();
    
    document.getElementById('dog-stats').textContent = 'Stats: ' + dogStat;
    document.getElementById('cat-stats').textContent = 'Stats: ' + catStat;

    // Compare stats and display winner
    if (dogStat > catStat) {
        displayWinner('Dog');
    } else {
        displayWinner('Cat');
    }

    // Reset for the next fight after a delay
    setTimeout(() => {
        resetFight(); // Clear stats and winner message
        fetchDogImages(); // Fetch new dog images
        fetchCatImages(); // Fetch new cat images
    }, 3000); // reset time
});

// Fetch the images on load
fetchDogImages();
fetchCatImages();