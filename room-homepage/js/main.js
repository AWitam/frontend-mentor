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

function getMobileSlides() {
  let slidesArray = [];
  slidesArray[0] = './images/mobile-image-hero-1.jpg';
  slidesArray[1]='./images/mobile-image-hero-2.jpg';
  slidesArray[2]= './images/mobile-image-hero-3.jpg';
  return slidesArray;
}

// Init new slider 
let newMobileSlider = new Slider( 
  
  // if mobile get mobile images form files ??????????????

  // else create slider from biger images and slide text content accordingly to images ????????????/
  getMobileSlides(),
  document.querySelector('header'),
  document.querySelector('#next'),
  document.querySelector('#previous')
);

// event listeners

newMobileSlider.buttonNext.addEventListener('click', () => {
  newMobileSlider.ifLastOrFirst();
  newMobileSlider.nextSlide();
});


newMobileSlider.buttonPrevious.addEventListener('click', () => {
  newMobileSlider.ifLastOrFirst();
  newMobileSlider.previousSlide();
});


