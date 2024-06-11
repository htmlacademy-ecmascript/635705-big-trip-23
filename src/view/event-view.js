import AbstractView from '../framework/view/abstract-view.js';
import {
  formattedDate,
  formattedTime,
  eventDuration,
  isEmpty,
} from '../utils.js';

const createEventScheduleTemplate = (dateFrom, dateTo) => `
  <div class="event__schedule">
  <p class="event__time">
    <time class="event__start-time" datetime="${dateFrom}">${formattedTime(
  dateFrom
)}</time>
    &mdash;
    <time class="event__end-time" datetime="${dateTo}">${formattedTime(
  dateTo
)}</time>
  </p>
  <p class="event__duration">${eventDuration(dateFrom, dateTo)}</p>
</div>
`;

function createOffersTemplate(offers) {
  if (isEmpty(offers)) {
    return '';
  }

  return offers
    .map(
      ({ title, price }) => `
  <li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>
  `
    )
    .join('');
}

function createTripEventTemplate(point, offers, destinations) {
  const { basePrice, dateFrom, dateTo, isFavorite, type } = point;
  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';
  const { name: destinationName } = destinations.find(
    (destination) => destination.id === point.destination
  );
  const { offers: typedOffers } = offers.find((offer) => offer.type === type);
  const selectedOffers = typedOffers.filter((offer) =>
    point.offers.includes(offer.id)
  );

  return `
  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${formattedDate(
  dateFrom
)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destinationName}</h3>
      ${createEventScheduleTemplate(dateFrom, dateTo)}
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOffersTemplate(selectedOffers)}
      </ul>
      <button class="event__favorite-btn ${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
}

export default class TripEventView extends AbstractView {
  #point = null;
  #offers = null;
  #destinations = null;
  #editClickHandler = null;
  #favoriteClickHandler = null;
  #rollupButtonElement = null;
  #favoriteButtonElement = null;

  constructor({ point, offers, destinations, onEditClick, onFavoriteClick }) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#editClickHandler = onEditClick;
    this.#favoriteClickHandler = onFavoriteClick;
    this.#rollupButtonElement =
      this.element.querySelector('.event__rollup-btn');
    this.#favoriteButtonElement = this.element.querySelector(
      '.event__favorite-btn'
    );

    this.#rollupButtonElement.addEventListener('click', this.#onClick);
    this.#favoriteButtonElement.addEventListener(
      'click',
      this.#onFavoriteClick
    );
  }

  get template() {
    return createTripEventTemplate(
      this.#point,
      this.#offers,
      this.#destinations
    );
  }

  removeElement() {
    super.removeElement();
    this.#rollupButtonElement.removeEventListener('click', this.#onClick);
    this.#favoriteButtonElement.removeEventListener(
      'click',
      this.#onFavoriteClick
    );
  }

  #onClick = (evt) => {
    evt.preventDefault();
    this.#editClickHandler();
  };

  #onFavoriteClick = (evt) => {
    evt.preventDefault();
    this.#favoriteClickHandler();
  };
}
