import TripFiltersView from '../view/trip-filters-view.js';
import TripSortView from '../view/trip-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import ListEmptyView from '../view/list-empty.js';
import { render } from '../framework/render.js';
import PointPresenter from './point-presenter.js';

export default class BoardPresenter {
  #filtersContainer = null;
  #tripEventsContainer = null;
  #pointModel = null;

  #points = [];
  #destinations = [];
  #offers = [];
  #filters = [];

  #eventsListComponent = new EventsListView();

  constructor({ filtersContainer, tripEventsContainer, pointModel }) {
    this.#filtersContainer = filtersContainer;
    this.#tripEventsContainer = tripEventsContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = this.#pointModel.points;
    this.#destinations = this.#pointModel.destinations;
    this.#offers = this.#pointModel.offers;
    this.#filters = this.#pointModel.filters;

    this.#renderPoints();
  }

  #renderTripFiltersView(filters) {
    render(
      new TripFiltersView({ filters, currentFilter: filters[0] }),
      this.#filtersContainer
    );
  }

  #renderEmptyView() {
    render(
      new ListEmptyView({ filter: this.#filters[0] }),
      this.#tripEventsContainer
    );
  }

  #renderSortView() {
    render(
      new TripSortView({
        sortTypes: this.#pointModel.sortTypes,
        currentSortType: this.#pointModel.sortTypes[0],
      }),
      this.#tripEventsContainer
    );
  }

  #renderPoints() {
    this.#renderTripFiltersView(this.#filters);

    if (!this.#points.length) {
      this.#renderEmptyView();
      return;
    }

    this.#renderSortView();
    render(this.#eventsListComponent, this.#tripEventsContainer);
    // points.forEach((point) => this.#renderPoint(point));
    for (const point of this.#points) {
      const destination = this.#destinations.find(
        (dest) => dest.id === point.destination
      );
      const offer = this.#offers.find((of) => of.type === point.type);
      const pointPresenter = new PointPresenter(
        this.#eventsListComponent.element,
        point,
        destination,
        offer
      );
      pointPresenter.init();
    }
  }
}
