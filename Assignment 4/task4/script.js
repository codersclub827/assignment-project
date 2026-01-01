// Select the paragraph
const myPara = document.getElementById('myPara');

// Buttons
const colorBtn = document.getElementById('colorBtn');
const bgBtn = document.getElementById('bgBtn');
const borderBtn = document.getElementById('borderBtn');
const fontBtn = document.getElementById('fontBtn');

// Color palette
const colors = ['#FF6B6B', '#4ECDC4', '#6A4C93', '#00BFFF', '#FF69B4'];

// Random color function
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Change text color
colorBtn.addEventListener('click', () => {
    myPara.style.color = getRandomColor();
});

// Change background color
bgBtn.addEventListener('click', () => {
    myPara.style.backgroundColor = getRandomColor();
});

// Change border
borderBtn.addEventListener('click', () => {
    myPara.style.border = `3px solid ${getRandomColor()}`;
});

// Change font size
fontBtn.addEventListener('click', () => {
    const sizes = ['16px', '18px', '20px', '22px', '24px', '26px'];
    myPara.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
});
