import AbstractView from '../framework/view/abstract-view.js';
import {
  formattedFullDate,
  formattedTime,
  calculateChecked,
  firstLetterUpperCase,
} from '../utils.js';
import { POINT_TYPES } from '../const.js';

function createEventTypeItemTemplate(id, type, isChecked) {
  return `
    <div class="event__type-item">
      <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${calculateChecked(
  isChecked
)}>
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-${id}">${firstLetterUpperCase(
  type
)}</label>
    </div>
`;
}

function createPhotoTapeTemplate(pictures) {
  if (!pictures.length) {
    return '';
  }
  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${pictures
    .map(
      ({ src, description }) =>
        `<img class="event__photo" src="${src}" alt="${description}">`
    )
    .join('')}
      </div>
    </div>`;
}

function createEditPointTemplate(point, destination, offer) {
  const { id, basePrice, dateFrom, dateTo, type } = point;
  const { description, name, pictures } = destination;
  const { offers } = offer;

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${POINT_TYPES.map((eventType) =>
    createEventTypeItemTemplate(id, eventType, type === eventType)
  ).join('')}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-${id}">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${name}" list="destination-list-${id}">
            <datalist id="destination-list-${id}">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${id}">From</label>
            <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${formattedFullDate(
  dateFrom
)} ${formattedTime(dateFrom)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-${id}">To</label>
            <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${formattedFullDate(
  dateTo
)} ${formattedTime(dateTo)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-${id}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              ${offers
    .map(
      ({ title, price }) =>
        `<div class="event__offer-selector">
                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${id}" type="checkbox" name="event-offer-luggage" checked>
                  <label class="event__offer-label" for="event-offer-luggage-${id}">
                    <span class="event__offer-title">${title}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${price}</span>
                  </label>
                </div>`
    )
    .join('')}
            </div>
          </section>

          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>
            ${createPhotoTapeTemplate(pictures)}
          </section>
        </section>
      </form>
    </li>
  `;
}

export default class EditPointView extends AbstractView {
  #point = null;
  #destination = null;
  #offer = null;
  #submitHandler = null;
  #cancelHandler = null;

  constructor(point, destination, offer, onFormSubmit, onFormCancel) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offer = offer;
    this.#submitHandler = onFormSubmit;
    this.#cancelHandler = onFormCancel;

    this.element.addEventListener('submit', this.#onFormSubmit);
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#onFormCancel);
    this.element
      .querySelector('.event__reset-btn')
      .addEventListener('click', this.#onFormCancel);
  }

  get template() {
    return createEditPointTemplate(this.#point, this.#destination, this.#offer);
  }

  removeElement() {
    super.removeElement();
    this.element.removeEventListener('click', this.#onFormSubmit);
    this.element
      .querySelector('.event__rollup-btn')
      .removeEventListener('click', this.#onFormCancel);
    this.element
      .querySelector('.event__reset-btn')
      .removeEventListener('click', this.#onFormCancel);
  }

  #onFormSubmit = (evt) => {
    evt.preventDefault();
    this.#submitHandler();
  };

  #onFormCancel = (evt) => {
    evt.preventDefault();
    this.#cancelHandler();
  };
}
