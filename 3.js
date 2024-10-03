//clash Animation
// Display winner
function displayWinner(winner) {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.textContent = winner + " Wins!";
    winnerDiv.classList.remove('hidden');
    
    // Start the clash animation
    startClashAnimation();
}

// Function to start clash animation
function startClashAnimation() {
    const dogImage = document.getElementById('dog-img');
    const catImage = document.getElementById('cat-img');

    // Add clash class to images
    dogImage.classList.add('clash');
    catImage.classList.add('clash-cat');

    // Remove classes after animation ends to reset for next clash
    setTimeout(() => {
        dogImage.classList.remove('clash');
        catImage.classList.remove('clash-cat');
    }, 1000); // Duration of the clash animation
}

// Verses button 
document.getElementById('verses-btn').addEventListener('click', function() {
    // Use the stored stats instead of generating new ones
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