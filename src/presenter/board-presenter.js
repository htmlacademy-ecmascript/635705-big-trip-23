import TripFiltersView from '../view/trip-filters-view.js';
import TripSortView from '../view/trip-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import ListEmptyView from '../view/list-empty.js';
import { render, RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import TripInfoView from '../view/trip-info-view.js';
import { updateItem, isEmpty } from '../utils.js';

export default class BoardPresenter {
  #infoContainer = null;
  #filterContainer = null;
  #boardContainer = null;
  #pointModel = null;

  #points = [];
  #eventsListComponent = new EventsListView();
  #pointPresenters = new Map();

  constructor({ infoContainer, filterContainer, boardContainer, model }) {
    this.#infoContainer = infoContainer;
    this.#filterContainer = filterContainer;
    this.#boardContainer = boardContainer;
    this.#pointModel = model;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#renderSummary(this.#pointModel.points);
    this.#renderFilters(this.#pointModel.filters);
    this.#clearTripEvents();
    this.#renderPoints();
  }

  #renderSummary(points) {
    render(
      new TripInfoView(points),
      this.#infoContainer,
      RenderPosition.AFTERBEGIN
    );
  }

  #renderFilters(filters) {
    render(
      new TripFiltersView({ filters, currentFilter: filters[-1] }),
      this.#filterContainer
    );
  }

  #renderEmptyView() {
    render(
      new ListEmptyView({ filter: this.#pointModel.filters[0] }),
      this.#boardContainer
    );
  }

  #renderSortView() {
    render(
      new TripSortView({
        sortTypes: this.#pointModel.sortTypes,
        currentSortType: this.#pointModel.sortTypes[0],
      }),
      this.#boardContainer
    );
  }

  #renderPoints() {
    if (isEmpty(this.#points)) {
      this.#renderEmptyView();
      return;
    }

    this.#renderSortView();
    render(this.#eventsListComponent, this.#boardContainer);

    this.#points.forEach((point) => {
      const pointPresenter = new PointPresenter({
        model: this.#pointModel,
        container: this.#eventsListComponent.element,
        onTripEventChange: this.#onTripEventChange,
        onModeChange: this.#onTripEventModeChange,
      });
      pointPresenter.init(point);
      this.#pointPresenters.set(point.id, pointPresenter);
    });
  }

  #clearTripEvents() {
    this.#pointPresenters.forEach((pointPresenter) => pointPresenter.delete());
    this.#pointPresenters.clear();
  }

  #onTripEventChange = (updatedTripEvent) => {
    this.#points = updateItem(this.#points, updatedTripEvent);
    this.#pointPresenters.get(updatedTripEvent.id).init(updatedTripEvent);
  };

  #onTripEventModeChange = () =>
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
}
