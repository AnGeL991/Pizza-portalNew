import {
  settings,
  select,
  classNames
} from './settings.js';
import Product from './conponents/product.js';
import Cart from './conponents/Cart.js';
import Booking from './conponents/Booking.js';





const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    thisApp.imgLinkOne = document.querySelector(select.img.linkOne);
    thisApp.imgLinkTwo = document.querySelector(select.img.linkTwo);
    thisApp.imgLinkthree = document.querySelector(select.img.linkthree);
   



    const idFromHash = window.location.hash.replace('#/', '');
    console.log(idFromHash);


    let pageMatchingHash = thisApp.pages[0].id;
    console.log(pageMatchingHash);
    


    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickElement = this;
        event.preventDefault();
        /* get page id from href attribute */
        const id = clickElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);
        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
    thisApp.imgLinkOne.addEventListener('click', function (event) {
      event.preventDefault();

      const clickElement = this;

      const id = clickElement.getAttribute('href').replace('#', '');

      thisApp.activatePage(id);
      window.location.hash = '#/' + id;
    });
    thisApp.imgLinkTwo.addEventListener('click', function (event) {
      event.preventDefault();

      const clickElement = this;

      const id = clickElement.getAttribute('href').replace('#', '');

      thisApp.activatePage(id);
      window.location.hash = '#/' + id;
    });
    thisApp.imgLinkthree.addEventListener('click', function (event) {
      event.preventDefault();

      const clickElement = this;

      const id = clickElement.getAttribute('href').replace('#', '');

      thisApp.activatePage(id);
      window.location.hash = '#/' + id;
    });
    
  },
  initBooking: function () {
    const thisApp = this;

    thisApp.widget = document.querySelector(select.containerOf.booking);

    thisApp.booking = new Booking(thisApp.widget);
  },
  activatePage: function (pageId) {
    const thisApp = this;
    const mainNav = document.querySelector(select.nav.main);
    const cartShow = document.querySelector('.cart');
    

    /* add class "active" to matching pages, remove from non-matching */
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
     
      if (pageId == 'main') {
        mainNav.classList.add('show');
        cartShow.classList.add('show');
      } else {
        mainNav.classList.remove('show');
        cartShow.classList.remove('show');
      }
      if(pageId =='about'){
        cartShow.classList.add('show');
      }

    }
    /* add class "active" to matching links, remove from non-matching */
    for (let link of thisApp.navLinks) {
      
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },
  initCart: function () {
    const thisApp = this;
    // const car = document.querySelector('.article-wrapper');
    // console.log(thisApp.car);
    // thisApp.carousel = new carousel(car);
    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);
    
    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEventListener('add-to-cart', function (event) {
      app.cart.add(event.detail.product);

    });

  },
  initData: function () {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.product;
    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {

        /*save parsedResponsed as thisApp.data.products*/
        thisApp.data.products = parsedResponse;
        /* execute initmenu method*/
        app.initMenu();
      });

  },
  initMenu: function () {
    const thisApp = this;
    //console.log('thisApp.data:', thisApp.data);
    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },
  initChange: function(){
    const thisApp = this;
    thisApp.dom = {};
    const art = document.querySelector('.article-side');
   
    
    
    thisApp.dom.slides = art.querySelectorAll('.slides');
    
    
    thisApp.nextSlide = 0;

   
    setInterval(function(){
      const activeSlide = document.querySelector('.slides:not(.show)');
      if(activeSlide ) activeSlide.classList.add('show');
      thisApp.dom.slides[thisApp.nextSlide].classList.remove('show');
      thisApp.nextSlide ++;
      
      if(thisApp.nextSlide >= thisApp.dom.slides.length) thisApp.nextSlide = 0;
     
    },3000);
  },
 
  


  init: function () {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    thisApp.initCart();
    thisApp.initBooking();
    thisApp.initChange();
    
    
  },
  
};



app.init();
