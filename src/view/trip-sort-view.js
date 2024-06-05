import AbstractView from '../framework/view/abstract-view.js';
import { firstLetterUpperCase, calculateChecked } from '../utils.js';

function createSortItemTemplate(type, isChecked) {
  return `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}" ${calculateChecked(
  isChecked
)}>
    <label class="trip-sort__btn" for="sort-${type}">${firstLetterUpperCase(
  type
)}</label>
  </div>
`;
}

function createTripSortTemplate(sortTypes, currentSortType) {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortTypes
    .map((type) => createSortItemTemplate(type, type === currentSortType))
    .join('')}
    </form>
  `;
}

export default class TripSortView extends AbstractView {
  #sortTypes = [];
  #currentSortType = '';

  constructor({ sortTypes, currentSortType }) {
    super();
    this.#sortTypes = sortTypes;
    this.#currentSortType = currentSortType;
  }

  get template() {
    return createTripSortTemplate(this.#sortTypes, this.#currentSortType);
  }
}
