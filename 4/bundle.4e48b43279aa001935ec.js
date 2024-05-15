(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class n{getTemplate(){return'\n    <ul class="trip-events__list"></ul>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const i=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCN","NOV","DEC"],s=function(e){const t=new Date(e);return`${t.getUTCDate().toString().padStart(2,"0")}/${(t.getUTCMonth()+1).toString().padStart(2,"0")}/${t.getUTCFullYear().toString().slice(-2)}`},a=function(e){const t=new Date(e);return`${"0".concat(t.getUTCHours()).slice(-2)}:${"0".concat(t.getUTCHours()).slice(-2)}`};class l{constructor(e,t,n){this.point=e,this.destination=t,this.offer=n}getTemplate(){return function(e,t,n){const{basePrice:i,dateFrom:l,dateTo:r,type:c}=e,{description:o,name:p}=t,{offers:d}=n;return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${c}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                <div class="event__type-item">\n                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${c}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${p}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${s(l)} ${a(l)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${s(r)} ${a(r)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${d.map((({title:e,price:t})=>`<div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                  <label class="event__offer-label" for="event-offer-luggage-1">\n                    <span class="event__offer-title">${e}</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">${t}</span>\n                  </label>\n                </div>`)).join("")}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${o}</p>\n          </section>\n        </section>\n      </form>\n    </li>\n  `}(this.point,this.destination,this.offer)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{constructor(e,t,n){this.point=e,this.destination=t,this.offer=n}getTemplate(){return function(e,t,n){const{basePrice:s,dateFrom:l,dateTo:r,isFavorite:c,type:o}=e,{name:p}=t,{offers:d}=n;return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${l}">${function(e){const t=new Date(e);return`${i[t.getMonth()]} ${t.getDate()}`}(l)}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${o}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${o} ${p}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${l}">${a(l)}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${r}">${a(r)}</time>\n          </p>\n          <p class="event__duration">${function(e,t){const n=Math.abs(new Date(t)-new Date(e)),i=Math.floor(n/36e5),s=Math.floor(n%36e5/6e4);return i>0?`${i.toString().padStart(2,"0")}H ${s.toString().padStart(2,"0")}M`:`${s}M`}(l,r)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${s}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${d.map((({title:e,price:t})=>`<li class="event__offer">\n            <span class="event__offer-title">${e}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${t}</span>\n          </li>`)).join("")}\n        </ul>\n        <button class="event__favorite-btn ${c&&" event__favorite-btn--active"}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.point,this.destination,this.offer)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const c=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",basePrice:1100,dateFrom:"2019-07-10T10:55:56.845Z",dateTo:"2019-07-10T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31"],type:"taxi"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808e",basePrice:2500,dateFrom:"2019-08-05T14:30:00.000Z",dateTo:"2019-08-06T08:45:00.000Z",destination:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32","b4c3e4e6-9053-42ce-b747-e281314baa34","b4c3e4e6-9053-42ce-b747-e281314baa35"],type:"bus"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808d",basePrice:800,dateFrom:"2020-02-20T18:00:00.000Z",dateTo:"2020-02-21T09:30:00.000Z",destination:"w8b93zfg-45mp-tz84-1234-abcde5678901",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32","b4c3e4e6-9053-42ce-b747-e281314baa35"],type:"train"},{id:"f4b62099-293f-4c3d-a702-94eec4a28090",basePrice:1470,dateFrom:"2021-04-15T10:15:00.000Z",dateTo:"2021-04-16T17:45:00.000Z",destination:"w8b93zfg-45mp-tz84-1234-abcde5678901",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32"],type:"ship"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808f",basePrice:340,dateFrom:"2022-01-08T22:00:00.000Z",dateTo:"2022-01-09T13:20:00.000Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa37"],type:"drive"},{id:"f4b62099-293f-4c3d-a702-94eec4a28091",basePrice:3e3,dateFrom:"2023-06-30T08:45:00.000Z",dateTo:"2023-07-01T19:10:00.000Z",destination:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32","b4c3e4e6-9053-42ce-b747-e281314baa33","b4c3e4e6-9053-42ce-b747-e281314baa34","b4c3e4e6-9053-42ce-b747-e281314baa35","b4c3e4e6-9053-42ce-b747-e281314baa36","b4c3e4e6-9053-42ce-b747-e281314baa41"],type:"flight"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808y",basePrice:3e3,dateFrom:"2024-10-12T17:00:00.000Z",dateTo:"2024-10-13T11:55:00.000Z",destination:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa34","b4c3e4e6-9053-42ce-b747-e281314baa38"],type:"check-in"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808z",basePrice:3e3,dateFrom:"2025-12-24T09:20:00.000Z",dateTo:"2025-12-25T23:59:59.999Z",destination:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa39","b4c3e4e6-9053-42ce-b747-e281314baa40"],type:"sightseeing"}],o=[{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:"Chamonix parliament building"}]},{id:"w8b93zfg-45mp-tz84-1234-abcde5678901",description:"Amsterdam, is a beautiful city, a true asian pearl, with crowded streets.",name:"Amsterdam",pictures:[{src:"http://picsum.photos/300/200?r=0.9261874632018752",description:"Amsterdam parliament building"}]},{id:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",description:"Geneva, is a beautiful city, a true asian pearl, with crowded streets.",name:"Geneva",pictures:[{src:"http://picsum.photos/300/200?r=0.5123948726382917",description:"Geneva parliament building"}]}],p=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Order Uber",price:20}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Add luggage",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa34",title:"Add meal",price:15},{id:"b4c3e4e6-9053-42ce-b747-e281314baa35",title:"Choose seats",price:5}]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Add luggage",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa35",title:"Choose seats",price:5}]},{type:"ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Add luggage",price:50}]},{type:"drive",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa37",title:"Rent a car",price:200}]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Add luggage",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa33",title:"Switch to comfort",price:80},{id:"b4c3e4e6-9053-42ce-b747-e281314baa34",title:"Add meal",price:15},{id:"b4c3e4e6-9053-42ce-b747-e281314baa35",title:"Choose seats",price:5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa36",title:"Travel by train",price:40},{id:"b4c3e4e6-9053-42ce-b747-e281314baa41",title:"Upgrade to a business class",price:120}]},{type:"check-in",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa38",title:"Add breakfast",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa34",title:"Add meal",price:15}]},{type:"sightsee",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa39",title:"Book tickets",price:40},{id:"b4c3e4e6-9053-42ce-b747-e281314baa40",title:"Lunch in city",price:30}]}],d=document.querySelector(".trip-controls__filters"),v=document.querySelector(".trip-events"),_=new class{constructor(){this.points=[],this.destinations=[],this.offers=[]}init(){this.points=c,this.destinations=o,this.offers=p}getPoints(){return this.points}getDestinations(){return this.destinations}getOffers(){return this.offers}};_.init();const b=new class{eventsListComponent=new n;constructor({boardContainer:e,pointModel:t}){this.boardContainer=e,this.pointModel=t}init(){const e=this.pointModel.getPoints(),n=this.pointModel.getDestinations(),i=this.pointModel.getOffers();t(this.eventsListComponent,this.boardContainer),t(new l(e[0],n.find((t=>t.id===e[0].destination)),i.find((t=>t.type===e[0].type))),this.eventsListComponent.getElement()),e.forEach((e=>t(new r(e,n.find((t=>t.id===e.destination)),i.find((t=>t.type===e.type))),this.eventsListComponent.getElement())))}}({boardContainer:v,pointModel:_});t(new class{getTemplate(){return'\n    <form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},d),t(new class{getTemplate(){return'\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},v),b.init()})();
//# sourceMappingURL=bundle.4e48b43279aa001935ec.js.map