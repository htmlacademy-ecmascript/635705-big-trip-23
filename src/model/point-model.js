import { points } from '../mock/points.js';
import { destinations } from '../mock/destinations.js';
import { offers } from '../mock/offers.js';
import { Filters, SORT_TYPES } from '../const';

export default class PointModel {
  #points = [];
  #destinations = [];
  #offers = [];
  #filters = [];
  #sortTypes = [];

  init() {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#filters = Object.values(Filters);
    this.#sortTypes = SORT_TYPES;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  get filters() {
    return this.#filters;
  }

  get sortTypes() {
    return this.#sortTypes;
  }
}
