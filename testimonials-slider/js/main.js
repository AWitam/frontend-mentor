class Slider {
  constructor(images) {
    this.images = images;
    this.slider =  document.querySelector('.section-slider');
    this.currentSlide = 0;   
    this.currentImage = null;
    this.btnPrev = document.querySelector('.button-prev');
    this.btnNext =  document.querySelector('.button-next');    
  }

  initSlider() {
    this.currentImage = this.images[this.currentSlide];
    this.currentImage.style.display = 'block';
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
  }


}


(function() {
  const images = Array.from(document.querySelector('.pictures').children);
  const slider = new Slider(images);
  slider.initSlider();
})();
