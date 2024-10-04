//This file is for the initial big image 
// Dog Image
async function fetchDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    document.getElementById('dog-img').src = data.message;
}

// Repeated code but for cat image
async function fetchCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    document.getElementById('cat-img').src = data[0].url;
}

// random stats for cat and dog
function generateRandomStats() {
    return Math.floor(Math.random() * 100) + 1; // Random stat between 1 and 100
}

// Display winner
function displayWinner(winner) {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.textContent = winner + " Wins!";
    winnerDiv.classList.remove('hidden');
}

// Verses button 
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
});

// Fetch the images on page load
fetchDogImage();
fetchCatImage();