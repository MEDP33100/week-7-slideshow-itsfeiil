let images = [];
let currentIndex = 0;

async function fetchDogs() {
    try {
        let response = await fetch('https://api.thedogapi.com/v1/images/search?limit=5');
        let data = await response.json();
        images = data.map(dog => dog.url);
        document.getElementById('dogImage').src = images[currentIndex];
    } catch (error) {
        console.error("Error fetching dog images:", error);
    }
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById('dogImage').src = images[currentIndex];
}

fetchDogs();
