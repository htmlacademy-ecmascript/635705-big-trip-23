import EventsListView from '../view/events-list-view.js';
import EditPoint from '../view/edit-point-view.js';
import EventView from '../view/event-view.js';
import { render } from '../framework/render.js';

export default class BoardPresenter {
  #boardContainer = null;
  #pointModel = null;

  #eventsListComponent = new EventsListView();

  constructor({ boardContainer, pointModel }) {
    this.#boardContainer = boardContainer;
    this.#pointModel = pointModel;
  }

  init() {
    const points = this.#pointModel.getPoints();
    const destinations = this.#pointModel.getDestinations();
    const offers = this.#pointModel.getOffers();

    render(this.#eventsListComponent, this.#boardContainer);
    render(
      new EditPoint(
        points[0],
        destinations.find(
          (destination) => destination.id === points[0].destination
        ),
        offers.find((offer) => offer.type === points[0].type)
      ),
      this.#eventsListComponent.element
    );

    points.forEach((point) =>
      render(
        new EventView(
          point,
          destinations.find(
            (destination) => destination.id === point.destination
          ),
          offers.find((offer) => offer.type === point.type)
        ),
        this.#eventsListComponent.element
      )
    );
  }
}
