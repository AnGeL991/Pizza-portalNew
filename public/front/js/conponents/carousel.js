
// class carousel {
//   constructor(element) {
//     const thisCar = this;
//     thisCar.element = element;
//     thisCar.nextSlide = 0;
//     thisCar.getElements();
//     thisCar.hideSlides();
//     thisCar.changeSlide();
//     thisCar.runCarousel();
    

//   }
//   getElements() {
//     const thisCar = this;
//     thisCar.dom = {};
//     thisCar.dom.slides = document.element.querySelectorAll('.article');

//   }

//   hideSlides() {
//     const thisCar = this;
//     for (let slide of thisCar.dom.slides) {
//       slide.classList.add('show');
//     }
//   }
//   runCarousel() {
//     const thisCar = this;
//     thisCar.timer = setInterval(thisCar.changeSlide(),3000);
//   }
//   changeSlide() {
//     const thisCar = this;
//     const activeSlide = this.element.querySelector('.article:not(.show)');
//     if (activeSlide) activeSlide.classList.add('show');
//     thisCar.dom.slides[this.nextSlide].classList.remove('show');
//     thisCar.nextSlide++;
//     if (thisCar.nextSlide.nextSlide >= this.dom.slides.lenght) thisCar.nextSlide = 0;
//   }
  
// }
// //const car = new carousel(document.querySelector('.article-wrapper'));
// export default carousel;



