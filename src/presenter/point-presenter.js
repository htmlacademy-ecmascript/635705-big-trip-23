import EventView from '../view/event-view.js';
import EditPointView from '../view/edit-point-view.js';
import { render, replace } from '../framework/render.js';

export default class PointPresenter {
  #container = null;
  #point = null;
  #destination = null;
  #offer = null;

  constructor(container, point, destination, offer) {
    this.#container = container;
    this.#point = point;
    this.#destination = destination;
    this.#offer = offer;
  }

  init(){
    this.#renderPoint(this.#point, this.#destination, this.#offer);
  }

  #renderPoint(point, destination, offer) {
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

    render(eventView, this.#container);
  }
}
