import {
  select,
  templates,
  settings,
  classNames
} from '../settings.js';
import {
  utils
} from '../utils.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';



class Booking {
  constructor(element) {

    const thisBooking = this;

    thisBooking.starters = [];
    thisBooking.waiter = [];
    thisBooking.phone = [];
    thisBooking.addres = [];
    
    thisBooking.render(element);
    thisBooking.initWidgets();
    thisBooking.getDate();
    thisBooking.addTableListeners();

  }
  addTableListeners(){
   
    const thisBooking = this;
    
    const tables = thisBooking.dom.tables;
    
    let tableBooked = '';
    

    for ( let table of tables) {
      table.addEventListener('click', function(){
        
        table.classList.add('booked');
        tableBooked = table.getAttribute('data-table');
        thisBooking.table = tableBooked;
      });
    }
    thisBooking.hourPicker.dom.input.addEventListener('input', function(){
      if(tableBooked.length > 0) {
        tables[tableBooked - 1].classList.remove('booked');
      }
    });
    thisBooking.datePicker.dom.input.addEventListener('input', function(){
      if (tableBooked.length >0){
        tables[tableBooked -1 ].classList.remove('booked');
      }
    });
    
    thisBooking.dom.form.addEventListener('submit', function(){
      event.preventDefault();
      thisBooking.sendBooking()
        .then(function(){
          thisBooking.getDate();
        });
    });
    thisBooking.dom.form.addEventListener('change', function(event){
      if(event.target.value == 'water' || event.target.value == 'bread'){
        thisBooking.starters.push(event.target.value);
      }
    });
    thisBooking.dom.form.addEventListener('change', function(event){
      if(event.target.value == 'Service' || event.target.value == 'Sing'|| event.target.value =='Birthday-Party'){
        thisBooking.waiter.push(event.target.value);
      }
    });
    thisBooking.dom.phone.addEventListener('change', function(event){
      event.preventDefault();
     
      if(thisBooking.phone == null){
        thisBooking.phone.push(event.target.value);   
      } else thisBooking.phone.length = 0;
      thisBooking.phone.push(event.target.value); 

     
    });
    thisBooking.dom.addres.addEventListener('change',function(event){
      event.preventDefault();
      if(thisBooking.phone == null){
        thisBooking.addres.push(event.target.value);
      } else thisBooking.addres.length = 0;
      thisBooking.addres.push(event.target.value);
     
    });

   
  }
  getDate() {
    const thisBooking = this;

    const startDateParam = settings.db.dateStartParamKey + '=' + utils.dateToStr(thisBooking.datePicker.minDate);
    const endDateParam = settings.db.dateEndParamKey + '=' + utils.dateToStr(thisBooking.datePicker.maxDate);
   

    const params = {
      booking: [
        startDateParam,
        endDateParam,
      ],
      eventsCurrent: [
        settings.db.notRepeatParam,
        startDateParam,
        endDateParam,
      ],
      eventsRepeat: [
        settings.db.repeatParam,
        endDateParam,
      ],
    };
    console.log('getData params', params);

    const urls = {
      booking: settings.db.url + '/' + settings.db.booking +
        '?' + params.booking.join('&'),
      eventsCurrent: settings.db.url + '/' + settings.db.event +
        '?' + params.eventsCurrent.join('&'),
      eventsRepeat: settings.db.url + '/' + settings.db.event +
        '?' + params.eventsRepeat.join('&'),
    };
    //console.log(urls);
    Promise.all([
      fetch(urls.booking),
      fetch(urls.eventsCurrent),
      fetch(urls.eventsRepeat),

    ])
      .then(function (allResponses) {
        const bookingsResponse = allResponses[0];
        const eventsCurrentResponse = allResponses[1];
        const eventsRepeatResponse = allResponses[2];

        return Promise.all([
          bookingsResponse.json(),
          eventsCurrentResponse.json(),
          eventsRepeatResponse.json(),

        ]);
      })
      .then(function ([bookings, eventsCurrent, eventsRepeat]) {
        console.log(bookings);
        console.log(eventsCurrent);
        console.log(eventsRepeat);
        thisBooking.parseData(bookings, eventsCurrent, eventsRepeat);
      });

  }
  sendBooking(){
    const thisBooking = this;
    const url = settings.db.url + '/' + settings.db.booking;
    
    const payload = {
      id: '',
      date: thisBooking.datePicker.correctValue,
      hour: thisBooking.hourPicker.correctValue,
      table: parseInt(thisBooking.table),
      repeat: false,
      duration: thisBooking.hoursAmount.correctValue,
      people: thisBooking.peopleAmount.correctValue,
      starters: thisBooking.starters,
      waiter: thisBooking.waiter,
      phone: thisBooking.phone,
      addres: thisBooking.addres,
      
    };
    console.log(payload);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return fetch(url, options)
      .then(function (response) {
        return response.json();
      });
  }
  parseData(bookings, eventsCurrent, eventsRepeat) {
    const thisBooking = this;

    thisBooking.booked = {};
    
    for (let item of bookings) {
      thisBooking.makeBooked(item.date, item.hour, item.duration, item.table);
      
    }
   
    for (let item of eventsCurrent) {
      thisBooking.makeBooked(item.date, item.hour, item.duration, item.table);

    }
    
    
    

    const minDate = thisBooking.datePicker.minDate;
    const maxDate = thisBooking.datePicker.maxDate;
    
    for (let item of eventsRepeat) {
      if (item.repeat == 'daily') {
        for (let LoopDate = minDate; LoopDate <= maxDate; LoopDate = utils.addDays(LoopDate, 5)) {
          
          thisBooking.makeBooked(utils.dateToStr(LoopDate), item.hour, item.duration,item.table);
          
          
        }
      }
    }
   
    thisBooking.updateDOM();
    console.log('thisBooking.booked', thisBooking.booked);
    
  }
  makeBooked(date, hour, duration, table) {
    const thisBooking = this;
   
    if (typeof thisBooking.booked[date] == 'undefined') {
      
      thisBooking.booked[date] = {};
      
    }
    
  
    const startHour = utils.hourToNumber(hour);
    


    for (let hourBlock = startHour; hourBlock < startHour + duration; hourBlock += 0.5) {
        
      if (typeof thisBooking.booked[date][hourBlock] == 'undefined') {
        
        thisBooking.booked[date][hourBlock] = [];
      }
      thisBooking.booked[date][hourBlock].push(table);
     
    }
    

  }
  
  updateDOM(){
    const thisBooking = this;
    thisBooking.chosenTable = null;
    
    
    
    thisBooking.date = thisBooking.datePicker.value;
    thisBooking.hour = utils.hourToNumber(thisBooking.hourPicker.value);
    
    let allAvailable = false ;

    if(
      typeof thisBooking.booked[thisBooking.date] == 'undefined'
      ||
      typeof thisBooking.booked[thisBooking.date][thisBooking.hour] == 'undefined'
    ){
      allAvailable = true;
    }
    for(let table of thisBooking.dom.tables){
      let tableId = table.getAttribute(settings.booking.tableIdAttribute);
      if(!isNaN(tableId)){
        tableId = parseInt(tableId);
      }
      if(
        !allAvailable
        &&
        thisBooking.booked[thisBooking.date][thisBooking.hour].includes(tableId) 
      ){
        table.classList.add(classNames.booking.tableBooked);

      }else {
        table.classList.remove(classNames.booking.tableBooked);
      }
      
    }
  }
  


  render(element) {


    const thisBooking = this;

    const generateHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generateHTML;
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);
    thisBooking.dom.tables = thisBooking.dom.wrapper.querySelectorAll(select.booking.tables);
    thisBooking.dom.form = thisBooking.dom.wrapper.querySelector(select.booking.form);
    thisBooking.dom.phone = thisBooking.dom.wrapper.querySelector(select.booking.order_tel);
    thisBooking.dom.addres = thisBooking.dom.wrapper.querySelector(select.booking.order_adress);  
  }
  initWidgets() {

    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);
    
    thisBooking.dom.wrapper.addEventListener('updated',function(){
      thisBooking.updateDOM();
    });
    
  }
  
}
export default Booking;