// Create stars
const starCount = 2000; // Adjust the number of stars as needed
const body = document.querySelector('body');

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = ${Math.random() * 100}%;
  star.style.top = ${Math.random() * 100}%;
  star.style.animationDelay = ${Math.random() * 10}s; // Randomize animation delay
  body.appendChild(star);
}