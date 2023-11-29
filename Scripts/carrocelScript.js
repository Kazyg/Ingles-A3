let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
let intervalId;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
  restartInterval()
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
  restartInterval()
}
  
function startInterval() {
    intervalId = setInterval(() => {
      nextSlide();
    }, 4000);
  }
  
function restartInterval() {
    clearInterval(intervalId);
    startInterval();
}
  

startInterval();
