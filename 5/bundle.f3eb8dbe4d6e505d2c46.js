(()=>{"use strict";var e={10:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(537),a=n.n(i),s=n(645),r=n.n(s)()(a());r.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const l=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var l=0;l<this.length;l++){var o=this[l][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);i&&r[p[0]]||(void 0!==s&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=s),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(a," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},r=[],l=0;l<e.length;l++){var o=e[l],c=i.base?o[0]+i.base:o[0],p=s[c]||0,d="".concat(c," ").concat(p);s[c]=p+1;var v=n(d),u={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==v)t[v].references++,t[v].updater(u);else{var f=a(u,i);i.byIndex=l,t.splice(l,0,{identifier:d,updater:f,references:1})}r.push(d)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var l=n(s[r]);t[l].references--}for(var o=i(e,a),c=0;c<s.length;c++){var p=n(s[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}s=o}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e,t,n="beforeend"){if(!(e instanceof h))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof h&&t instanceof h))throw new Error("Can replace only components");const n=e.element,i=t.element,a=i.parentElement;if(null===a)throw new Error("Parent element doesn't exist");a.replaceChild(n,i)}var i=n(379),a=n.n(i),s=n(795),r=n.n(s),l=n(569),o=n.n(l),c=n(565),p=n.n(c),d=n(216),v=n.n(d),u=n(589),f=n.n(u),b=n(10),_={};_.styleTagTransform=f(),_.setAttributes=p(),_.insert=o().bind(null,"head"),_.domAPI=r(),_.insertStyleElement=v(),a()(b.Z,_),b.Z&&b.Z.locals&&b.Z.locals;const m="shake";class h{#e=null;constructor(){if(new.target===h)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),e?.()}),600)}}class y extends h{get template(){return'\n    <ul class="trip-events__list"></ul>\n  '}}const g=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCN","NOV","DEC"],A=function(e){const t=new Date(e);return`${t.getUTCDate().toString().padStart(2,"0")}/${(t.getUTCMonth()+1).toString().padStart(2,"0")}/${t.getUTCFullYear().toString().slice(-2)}`},w=function(e){const t=new Date(e);return`${"0".concat(t.getUTCHours()).slice(-2)}:${"0".concat(t.getUTCHours()).slice(-2)}`};class x extends h{#t=null;#n=null;#i=null;#a=null;#s=null;constructor(e,t,n,i){super(),this.#t=e,this.#n=t,this.#i=n,this.#a=i,this.#s=this.element.querySelector(".event__rollup-btn"),this.#s.addEventListener("click",this.#r)}get template(){return function(e,t,n){const{basePrice:i,dateFrom:a,dateTo:s,isFavorite:r,type:l}=e,{name:o}=t,{offers:c}=n;return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${a}">${function(e){const t=new Date(e);return`${g[t.getMonth()]} ${t.getDate()}`}(a)}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${l}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${l} ${o}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${a}">${w(a)}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${s}">${w(s)}</time>\n          </p>\n          <p class="event__duration">${function(e,t){const n=Math.abs(new Date(t)-new Date(e)),i=Math.floor(n/36e5),a=Math.floor(n%36e5/6e4);return i>0?`${i.toString().padStart(2,"0")}H ${a.toString().padStart(2,"0")}M`:`${a}M`}(a,s)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${i}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${c.map((({title:e,price:t})=>`<li class="event__offer">\n            <span class="event__offer-title">${e}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${t}</span>\n          </li>`)).join("")}\n        </ul>\n        <button class="event__favorite-btn ${r&&" event__favorite-btn--active"}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.#t,this.#n,this.#i)}removeElement(){super.removeElement(),this.#s.removeEventListener("click",this.#r)}#r=e=>{e.preventDefault(),this.#a()}}class E extends h{#t=null;#n=null;#i=null;#l=null;#o=null;constructor(e,t,n,i,a){super(),this.#t=e,this.#n=t,this.#i=n,this.#l=i,this.#o=a,this.element.addEventListener("submit",this.#c),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#p),this.element.querySelector(".event__reset-btn").addEventListener("click",this.#p)}get template(){return function(e,t,n){const{basePrice:i,dateFrom:a,dateTo:s,type:r}=e,{description:l,name:o}=t,{offers:c}=n;return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${r}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                <div class="event__type-item">\n                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${r}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${o}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${A(a)} ${w(a)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${A(s)} ${w(s)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${c.map((({title:e,price:t})=>`<div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                  <label class="event__offer-label" for="event-offer-luggage-1">\n                    <span class="event__offer-title">${e}</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">${t}</span>\n                  </label>\n                </div>`)).join("")}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${l}</p>\n          </section>\n        </section>\n      </form>\n    </li>\n  `}(this.#t,this.#n,this.#i)}removeElement(){super.removeElement(),this.element.removeEventListener("click",this.#c),this.element.querySelector(".event__rollup-btn").removeEventListener("click",this.#p),this.element.querySelector(".event__reset-btn").removeEventListener("click",this.#p)}#c=e=>{e.preventDefault(),this.#l()};#p=e=>{e.preventDefault(),this.#o()}}const C=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",basePrice:1100,dateFrom:"2019-07-10T10:55:56.845Z",dateTo:"2019-07-10T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31"],type:"taxi"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808e",basePrice:2500,dateFrom:"2019-08-05T14:30:00.000Z",dateTo:"2019-08-06T08:45:00.000Z",destination:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32","b4c3e4e6-9053-42ce-b747-e281314baa34","b4c3e4e6-9053-42ce-b747-e281314baa35"],type:"bus"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808d",basePrice:800,dateFrom:"2020-02-20T18:00:00.000Z",dateTo:"2020-02-21T09:30:00.000Z",destination:"w8b93zfg-45mp-tz84-1234-abcde5678901",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32","b4c3e4e6-9053-42ce-b747-e281314baa35"],type:"train"},{id:"f4b62099-293f-4c3d-a702-94eec4a28090",basePrice:1470,dateFrom:"2021-04-15T10:15:00.000Z",dateTo:"2021-04-16T17:45:00.000Z",destination:"w8b93zfg-45mp-tz84-1234-abcde5678901",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32"],type:"ship"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808f",basePrice:340,dateFrom:"2022-01-08T22:00:00.000Z",dateTo:"2022-01-09T13:20:00.000Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa37"],type:"drive"},{id:"f4b62099-293f-4c3d-a702-94eec4a28091",basePrice:3e3,dateFrom:"2023-06-30T08:45:00.000Z",dateTo:"2023-07-01T19:10:00.000Z",destination:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32","b4c3e4e6-9053-42ce-b747-e281314baa33","b4c3e4e6-9053-42ce-b747-e281314baa34","b4c3e4e6-9053-42ce-b747-e281314baa35","b4c3e4e6-9053-42ce-b747-e281314baa36","b4c3e4e6-9053-42ce-b747-e281314baa41"],type:"flight"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808y",basePrice:3e3,dateFrom:"2024-10-12T17:00:00.000Z",dateTo:"2024-10-13T11:55:00.000Z",destination:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa34","b4c3e4e6-9053-42ce-b747-e281314baa38"],type:"check-in"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808z",basePrice:3e3,dateFrom:"2025-12-24T09:20:00.000Z",dateTo:"2025-12-25T23:59:59.999Z",destination:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa39","b4c3e4e6-9053-42ce-b747-e281314baa40"],type:"sightseeing"}],k=[{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:"Chamonix parliament building"}]},{id:"w8b93zfg-45mp-tz84-1234-abcde5678901",description:"Amsterdam, is a beautiful city, a true asian pearl, with crowded streets.",name:"Amsterdam",pictures:[{src:"http://picsum.photos/300/200?r=0.9261874632018752",description:"Amsterdam parliament building"}]},{id:"x7c82hij-99qp-uq26-5678-uvwxyz9876543",description:"Geneva, is a beautiful city, a true asian pearl, with crowded streets.",name:"Geneva",pictures:[{src:"http://picsum.photos/300/200?r=0.5123948726382917",description:"Geneva parliament building"}]}],T=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Order Uber",price:20}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Add luggage",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa34",title:"Add meal",price:15},{id:"b4c3e4e6-9053-42ce-b747-e281314baa35",title:"Choose seats",price:5}]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Add luggage",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa35",title:"Choose seats",price:5}]},{type:"ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Add luggage",price:50}]},{type:"drive",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa37",title:"Rent a car",price:200}]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Add luggage",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa33",title:"Switch to comfort",price:80},{id:"b4c3e4e6-9053-42ce-b747-e281314baa34",title:"Add meal",price:15},{id:"b4c3e4e6-9053-42ce-b747-e281314baa35",title:"Choose seats",price:5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa36",title:"Travel by train",price:40},{id:"b4c3e4e6-9053-42ce-b747-e281314baa41",title:"Upgrade to a business class",price:120}]},{type:"check-in",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa38",title:"Add breakfast",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa34",title:"Add meal",price:15}]},{type:"sightseeing",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa39",title:"Book tickets",price:40},{id:"b4c3e4e6-9053-42ce-b747-e281314baa40",title:"Lunch in city",price:30}]}],$=document.querySelector(".trip-controls__filters"),F=document.querySelector(".trip-events"),S=new class{#d=[];#v=[];#u=[];init(){this.#d=C,this.#v=k,this.#u=T}getPoints(){return this.#d}getDestinations(){return this.#v}getOffers(){return this.#u}};S.init();const M=new class{#f=null;#b=null;#_=new y;#m(n){const i=this.#b.getDestinations().find((e=>e.id===n.destination)),a=this.#b.getOffers().find((e=>e.type===n.type)),s=e=>{"Escape"===e.key&&(e.preventDefault(),o())},r=new x(n,i,a,(()=>(t(l,r),void document.addEventListener("keydown",s)))),l=new E(n,i,a,(()=>o()),(()=>o()));function o(){t(r,l),document.removeEventListener("keydown",s)}e(r,this.#_.element)}#h(){const t=this.#b.getPoints();e(this.#_,this.#f),t.forEach((e=>this.#m(e)))}constructor({boardContainer:e,pointModel:t}){this.#f=e,this.#b=t}init(){this.#h()}}({boardContainer:F,pointModel:S});e(new class extends h{get template(){return'\n    <form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  '}},$),e(new class extends h{get template(){return'\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>\n  '}},F),M.init()})()})();
//# sourceMappingURL=bundle.f3eb8dbe4d6e505d2c46.js.map