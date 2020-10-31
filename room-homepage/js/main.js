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
