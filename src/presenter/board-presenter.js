import TripFiltersView from '../view/trip-filters-view.js';
import TripSortView from '../view/trip-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import EditPointView from '../view/edit-point-view.js';
import ListEmptyView from '../view/list-empty.js';
import { render, replace } from '../framework/render.js';

export default class BoardPresenter {
  #filters = null;
  #boardContainer = null;
  #pointModel = null;

  #eventsListComponent = new EventsListView();

  #renderPoint(point) {
    const destination = this.#pointModel.destinations.find(
      (dest) => dest.id === point.destination
    );
    const offer = this.#pointModel.offers.find((of) => of.type === point.type);

    const onEsckeydown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        switchToViewMode();
      }
    };

    const onEditClick = () => switchToEditMode();
    const onFormSubmit = () => switchToViewMode();
    const onFormCancel = () => switchToViewMode();

    const eventView = new EventView(point, destination, offer, onEditClick);
    const editPointView = new EditPointView(
      point,
      destination,
      offer,
      onFormSubmit,
      onFormCancel
    );

    function switchToEditMode() {
      replace(editPointView, eventView);
      document.addEventListener('keydown', onEsckeydown);
    }

    function switchToViewMode() {
      replace(eventView, editPointView);
      document.removeEventListener('keydown', onEsckeydown);
    }

    render(eventView, this.#eventsListComponent.element);
  }

  #renderTripFiltersView(filters) {
    render(
      new TripFiltersView({ filters, currentFilter: filters[0] }),
      this.#filters
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
    const points = this.#pointModel.points;
    const filters = this.#pointModel.filters;

    this.#renderTripFiltersView(filters);

    if (!points.length) {
      this.#renderEmptyView();
      return;
    }

    this.#renderSortView();
    render(this.#eventsListComponent, this.#boardContainer);
    points.forEach((point) => this.#renderPoint(point));
  }

  constructor({ filters, boardContainer, pointModel }) {
    this.#filters = filters;
    this.#boardContainer = boardContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#renderPoints();
  }
}
