import AbstractView from '../framework/view/abstract-view.js';
import {calculateChecked, firstLetterUpperCase} from '../utils.js';

function createTripFilterTemplate(value, isChecked) {
  return `
  <div class="trip-filters__filter">
    <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" ${calculateChecked(
  isChecked
)}>
    <label class="trip-filters__filter-label" for="filter-${value}">${firstLetterUpperCase(
  value
)}</label>
  </div>
`;
}

function createTripFiltersTemplate(filters, currentFilter) {
  return `
    form class="trip-filters" action="#" method="get">
    ${filters
    .map((filter) =>
      createTripFilterTemplate(filter, filter === currentFilter)
    )
    .join('')}

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
  `;
}

export default class TripFiltersView extends AbstractView {
  #filters = [];
  #currentFilter = '';

  constructor({ filters, currentFilter }) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilter;
  }

  get template() {
    return createTripFiltersTemplate(this.#filters, this.#currentFilter);
  }
}
