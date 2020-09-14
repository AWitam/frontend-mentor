class Slider {
  constructor(images, testimonials) {
    this.images = images;
    this.slider =  document.querySelector('.section-slider');
    this.currentSlide = 0;   
    this.currentImage = null;
    this.testimonials = testimonials;
    this.currentTestimonial = null;
    this.btnPrev = document.querySelector('.button-prev');
    this.btnNext =  document.querySelector('.button-next');    
  }

  initSlider() {
    this.currentImage = this.images[this.currentSlide];
    this.currentImage.style.display = 'block';
    this.currentTestimonial = this.testimonials[this.currentSlide];
    this.currentTestimonial.style.display = 'block';
    this.addEventListeners();
  }
 
  addEventListeners() {
    this.btnPrev.addEventListener('click', () => {
      this.changeSlidePrev(this.currentSlide -1, this.currentSlide);
    });
    this.btnNext.addEventListener('click', ()=> {
      this.changeSlideNext(this.currentSlide, this.currentSlide +1)
    })
  }

  changeSlideNext(current, next) {
    if(next === this.images.length) {
      this.currentSlide = -1;      
    }
    this.currentSlide++;    
    this.updateCurrentImage(this.currentSlide);
  }

  changeSlidePrev(prev, current) {    
    if(current === 0) {
      this.currentSlide= this.images.length;
    }
    this.currentSlide--;    
    this.updateCurrentImage(this.currentSlide);
  } 

  updateCurrentImage(index) {
    this.currentImage.style.display = 'none';
    this.currentImage = this.images[index];
    this.currentImage.style.display='block';
    this.currentTestimonial.style.display = 'none';
    this.currentTestimonial = this.testimonials[index];
    this.currentTestimonial.style.display = 'block';
  }


}


(function() {
  const images = Array.from(document.querySelector('.pictures').children);
  const testimonials = Array.from(document.querySelector('.testimonials-content').children);
  const slider = new Slider(images, testimonials);
  slider.initSlider();
})();
