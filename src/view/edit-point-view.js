import AbstractView from '../framework/view/abstract-view.js';
import {
  formattedFullDate,
  formattedTime,
  calculateChecked,
  firstLetterUpperCase,
} from '../utils.js';
import { BLANK_TRIP_EVENT, POINT_TYPES } from '../const.js';

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

function createEventTimePeriodTemplate(id, dateFrom, dateTo) {
  return `
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${id}">From</label>
      <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${formattedFullDate(
  dateFrom
)} ${formattedTime(dateFrom)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${id}">From</label>
      <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${formattedFullDate(
  dateTo
)} ${formattedTime(dateTo)}">
    </div>
  `;
}

function createOfferItemTemplate({ id, type, title, price, isSelected }) {
  return `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${id}" type="checkbox" name="event-offer-${type}" ${
  isSelected ? 'checked' : ''
}>
      <label class="event__offer-label" for="event-offer-${type}-${id}">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>
  `;
}

function createOffersTemplate(offers) {
  if (!offers.length) {
    return '';
  }

  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${offers.map((offer) => createOfferItemTemplate(offer)).join('')}
      </div>
    </section>`;
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

function createDestinationTemplate({ description, pictures }) {
  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>

      ${createPhotoTapeTemplate(pictures)}
    </section>
  `;
}

function createEventEditTemplate(point, offers, destinations) {
  const { id, type, dateFrom, dateTo, basePrice } = point;
  const tripDestination = destinations.find(
    (destination) => destination.id === point.destination
  );
  const { offers: typedOffers } = offers.find((offer) => offer.type === type);
  const tripOffers = typedOffers.map((offer) => ({
    ...offer,
    isSelected: point.offers.includes(offer.id),
  }));

  return `
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
          <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${
  tripDestination.name
}" list="destination-list-${id}">
          <datalist id="destination-list-${id}">
            ${destinations
    .map(
      (destination) => `<option value="${destination.name}"></option>`
    )
    .join('')}
          </datalist>
        </div>

        ${createEventTimePeriodTemplate(id, dateFrom, dateTo)}

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
        ${createOffersTemplate(tripOffers)}
        ${createDestinationTemplate(tripDestination)}
      </section>
    </form>`;
}

export default class EditPointView extends AbstractView {
  #point = null;
  #offers = null;
  #destinations = null;
  #submitHandler = null;
  #cancelHandler = null;
  #rollupButtonElement = null;
  #resetButtonElement = null;

  constructor({
    point = BLANK_TRIP_EVENT,
    offers,
    destinations,
    onFormSubmit,
    onFormCancel,
  }) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#submitHandler = onFormSubmit;
    this.#cancelHandler = onFormCancel;

    this.element.addEventListener('submit', this.#onFormSubmit);
    this.#rollupButtonElement =
      this.element.querySelector('.event__rollup-btn');
    this.#resetButtonElement = this.element.querySelector('.event__reset-btn');

    this.#rollupButtonElement.addEventListener('click', this.#onCancelForm);
    this.#resetButtonElement.addEventListener('click', this.#onCancelForm);
  }

  get template() {
    return createEventEditTemplate(
      this.#point,
      this.#offers,
      this.#destinations
    );
  }

  removeElement() {
    super.removeElement();
    this.element.removeEventListener('submit', this.#onFormSubmit);
    this.#rollupButtonElement.removeEventListener('click', this.#onCancelForm);
    this.#resetButtonElement.removeEventListener('click', this.#onCancelForm);
  }

  #onFormSubmit = (evt) => {
    evt.preventDefault();
    this.#submitHandler(this.#point);
  };

  #onCancelForm = (evt) => {
    evt.preventDefault();
    this.#cancelHandler();
  };
}
