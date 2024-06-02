import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import { render } from '../framework/render.js';

export default class BoardPresenter {
  #boardContainer = null;
  #pointModel = null;

  #eventsListComponent = new EventsListView();

  #renderPoint(point, destinations, offers) {
    render(
      new EventView(
        point,
        destinations.find(
          (destination) => destination.id === point.destination
        ),
        offers.find((offer) => offer.type === point.type)
      ),
      this.#eventsListComponent.element
    );
  }

  constructor({ boardContainer, pointModel }) {
    this.#boardContainer = boardContainer;
    this.#pointModel = pointModel;
  }

  init() {
    const points = this.#pointModel.getPoints();
    const destinations = this.#pointModel.getDestinations();
    const offers = this.#pointModel.getOffers();

    render(this.#eventsListComponent, this.#boardContainer);

    points.forEach((point) => this.#renderPoint(point, destinations, offers));
  }
}
