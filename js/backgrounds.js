const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

// images randomly chosen
const imageChosen = images[Math.floor(Math.random() * images.length)];

// find bgImage div, set as background image
const div = document.getElementById("bgImage");
div.style.backgroundImage = `url('img/${imageChosen}')`;
