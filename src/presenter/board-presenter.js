import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import EditPointView from '../view/edit-point-view.js';
import { render, replace } from '../framework/render.js';

export default class BoardPresenter {
  #boardContainer = null;
  #pointModel = null;

  #eventsListComponent = new EventsListView();

  #renderPoint(point) {
    const destination = this.#pointModel
      .getDestinations()
      .find((dest) => dest.id === point.destination);
    const offer = this.#pointModel
      .getOffers()
      .find((of) => of.type === point.type);

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
    }

    function switchToViewMode() {
      replace(eventView, editPointView);
    }

    render(eventView, this.#eventsListComponent.element);
  }

  #renderPoints() {
    const points = this.#pointModel.getPoints();

    render(this.#eventsListComponent, this.#boardContainer);
    points.forEach((point) => this.#renderPoint(point));
  }

  constructor({ boardContainer, pointModel }) {
    this.#boardContainer = boardContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#renderPoints();
  }
}
