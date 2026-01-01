// Select buttons and paragraph
const hideBtn = document.getElementById('hideBtn');
const showBtn = document.getElementById('showBtn');
const myPara = document.getElementById('myPara');

// Array of fun colors
const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6A4C93', '#FF7F50', '#00BFFF', '#FF69B4'];

// Function to get a random color from array
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Hide paragraph with color effect
hideBtn.addEventListener('click', function() {
    myPara.style.display = 'none';
    document.body.style.backgroundColor = getRandomColor();
});

// Show paragraph with color effect
showBtn.addEventListener('click', function() {
    myPara.style.display = 'block';
    myPara.style.color = getRandomColor();
    document.body.style.backgroundColor = getRandomColor();
});
