const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  // Remove the active class from the current slide
  slides[currentIndex].classList.remove('active');
  
  // Increment the index (loop back to 0 if at the end)
  currentIndex = (currentIndex + 1) % slides.length;
  
  // Add the active class to the next slide
  slides[currentIndex].classList.add('active');
}

// Automatically change slide every 5 seconds
setInterval(showNextSlide, 5000);
