const carousel = document.getElementById('carousel');
const ul = carousel.querySelector('ul');
const itemWidth = ul.firstElementChild.offsetWidth;
const intervalTime = 4000;
let currentPosition = 0;
let intervalId;

function step() {
  currentPosition -= itemWidth;
  if (currentPosition < -itemWidth * 3) { 
    currentPosition = 0;
  }
  ul.style.transform = `translateX(${currentPosition}px)`;
}

intervalId = setInterval(() => {
  step();
}, intervalTime);

carousel.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

carousel.addEventListener('mouseleave', () => {
  intervalId = setInterval(() => {
    step();
  }, intervalTime);
});
