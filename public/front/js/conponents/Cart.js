import {
  settings,
  select,
  classNames,
  templates
} from '../settings.js';
import {utils} from '../utils.js';
import CartProduct from './CartProduct.js';

class Cart {
  constructor(element) {

    const thisCart = this;

    thisCart.products = [];
    thisCart.deliveryFee = settings.cart.defaultDeliveryFee;

    thisCart.getElements(element);
    thisCart.initActions();
    //console.log('new Cart', thisCart);
  }
 
  getElements(element) {
    const thisCart = this;
    thisCart.dom = {},
    thisCart.dom.wrapper = element;
    thisCart.dom.toggleTrigger = thisCart.dom.wrapper.querySelector(select.cart.toggleTrigger);
    thisCart.dom.productList = thisCart.dom.wrapper.querySelector(select.cart.productList);
    thisCart.dom.form = thisCart.dom.wrapper.querySelector(select.cart.form);
    thisCart.dom.address = thisCart.dom.wrapper.querySelector(select.cart.address);
    thisCart.dom.phone = thisCart.dom.wrapper.querySelector(select.cart.phone);
    thisCart.renderTotalsKeys = ['totalNumber', 'totalPrice', 'subtotalPrice', 'deliveryFee'];

    for (let key of thisCart.renderTotalsKeys) {
      thisCart.dom[key] = thisCart.dom.wrapper.querySelectorAll(select.cart[key]);
    }
  }

  initActions() {
    const thisCart = this;

    thisCart.dom.toggleTrigger.addEventListener('click', function () {
      thisCart.dom.wrapper.classList.toggle(classNames.cart.wrapperActive);

    });
    thisCart.dom.productList.addEventListener('updated', function () {
      thisCart.update();
    });
    thisCart.dom.productList.addEventListener('remove', function () {
      thisCart.remove(event.detail.cartProduct);
    });
    thisCart.dom.form.addEventListener('submit', function () {
      event.preventDefault();
      thisCart.sendOrder();
    });
  }

  update() {

    const thisCart = this;


    thisCart.subtotalPrice = 0;


    for (let product of thisCart.products) {
      thisCart.totalNumber = 0;
      thisCart.totalNumber += product.amount;
      thisCart.subtotalPrice += product.priceSingle * thisCart.totalNumber;

    }
    thisCart.totalPrice = thisCart.subtotalPrice + thisCart.deliveryFee;
    //console.log(thisCart.totalNumber);
    //console.log(thisCart.subtotalPrice);
    //console.log(thisCart.totalPrice);

    for (let key of thisCart.renderTotalsKeys) {
      for (let elem of thisCart.dom[key]) {
        elem.innerHTML = thisCart[key];
      }
    }
  }
  
  getData(product) {
    const thisCartProduct = product;
    return {
      id: thisCartProduct.id,
      amount: thisCartProduct.amount,
      price: thisCartProduct.price,
      priceSingle: thisCartProduct.priceSingle,
      params: thisCartProduct.params

    };
  }

  add(menuProduct) {
    const thisCart = this;
    const generatedHTML = templates.cartProduct(menuProduct);
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    thisCart.dom.productList.appendChild(generatedDom);
    thisCart.products.push(new CartProduct(menuProduct, generatedDom));
    thisCart.update();
    //console.log('thisCart.Products', thisCart.products);
   
    //console.log('adding product', menuProduct);

  }

  remove(cartProduct) {
    const thisCart = this;

    const index = thisCart.products.indexOf(cartProduct);

    thisCart.products.splice(index, 1);
    cartProduct.dom.wrapper.remove();
    thisCart.update();

  }

  sendOrder() {
    const thisCart = this;
    const url = settings.db.url + '/' + settings.db.order;
    
    const payload = {
      products: [],
      address: thisCart.dom.address.value,
      phone: thisCart.dom.phone.value,
      totalPrice: thisCart.totalPrice,
      totalNumber: thisCart.totalNumber,
      subtotalPrice: thisCart.subtotalPrice,
      deliveryFee: thisCart.deliveryFee
    };
    for (let product of thisCart.products) {
      payload.products.push(thisCart.getData(product));
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponsed', parsedResponse);
      });
  }
  
}
export default Cart;
