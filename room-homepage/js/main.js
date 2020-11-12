const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = hamburger.firstElementChild
const headerWrapper = document.querySelector('.header-wrapper');
const nav = document.querySelector('nav');


hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  
  //console.log(headerWrapper);
  if(headerWrapper.classList.contains('open')) {
    headerWrapper.classList.remove('open');
    nav.style.visibility = 'hidden'
    hamburgerIcon.src = 'images/icon-hamburger.svg';
  } else {
    headerWrapper.classList.add('open')    
    nav.style.visibility = 'visible';
    hamburgerIcon.src = 'images/icon-close.svg';
  }
});
/// Slider

/// Pass all objects with 'slide' clss to Slider constructor
/// get the length => number of all images in slider
// if 

function Slider(slides, sliderContainer, buttonNext, buttonPrevious) {
  this.slides = slides;
  this.sliderContainer =sliderContainer;
  this.buttonNext = buttonNext;
  this.buttonPrevious = buttonPrevious;
  this.currentSlide = 0;
  this.isLast = null;
  this.isFirst = null;
}

Slider.prototype.ifLastOrFirst = function () {
  if(this.slides.length -1 == this.currentSlide) {
    this.isLast = true;
  }
  if(this.currentSlide == 0) {
    this.isFirst = true;
  }
}

Slider.prototype.nextSlide = function() {
  if(this.isLast) {
    this.currentSlide = 0;
    this.isLast = false;
  } else {
    this.currentSlide++;
  }  
  this.displaySlide(this.currentSlide);
}


Slider.prototype.previousSlide = function() {
  if(this.isFirst) {
    this.currentSlide = this.slides.length -1;
    this.isFirst = false;
  } else {
    this.currentSlide--;
  }  
  this.displaySlide(this.currentSlide);
}



Slider.prototype.displaySlide = function(currentSlide) { 
  this.sliderContainer.style.backgroundImage = `url(${this.slides[currentSlide]})`;
}


// creating image/slides array 

function getSlides() {
  let slidesArray = [];
  slidesArray[0] = './images/mobile-image-hero-1.jpg';
  slidesArray[1]='./images/mobile-image-hero-2.jpg';
  slidesArray[2]= './images/mobile-image-hero-3.jpg';
  return slidesArray;
}



let newSlider = new Slider(  
  getSlides(),
  document.querySelector('header'),
  document.querySelector('#next'),
  document.querySelector('#previous')
);

newSlider.buttonNext.addEventListener('click', () => {
  newSlider.ifLastOrFirst();
  newSlider.nextSlide();
});


newSlider.buttonPrevious.addEventListener('click', () => {
  newSlider.ifLastOrFirst();
  newSlider.previousSlide();
})

