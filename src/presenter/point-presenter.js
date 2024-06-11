import EventView from '../view/event-view.js';
import EditPointView from '../view/edit-point-view.js';
import { render, replace, remove } from '../framework/render.js';
import { Mode } from '../const.js';

export default class PointPresenter {
  #point = null;
  #pointModel = null;
  #container = null;
  #eventView = null;
  #editPointView = null;
  #tripEventChangeHandler = null;
  #changeModeHandler = null;
  #mode = Mode.VIEW;

  constructor({ model, container, onTripEventChange, onModeChange }) {
    this.#pointModel = model;
    this.#container = container;
    this.#tripEventChangeHandler = onTripEventChange;
    this.#changeModeHandler = onModeChange;
  }

  init(point) {
    this.#point = point;
    this.#renderTripEvent(point);
  }

  #renderTripEvent(point) {
    const offers = this.#pointModel.offers;
    const destinations = this.#pointModel.destinations;

    const prevEventView = this.#eventView;
    const prevEditPointView = this.#editPointView;

    this.#eventView = new EventView({
      point,
      offers,
      destinations,
      onEditClick: this.#onEditClick,
      onFavoriteClick: this.#onFavoriteClick,
    });

    this.#editPointView = new EditPointView({
      point,
      offers,
      destinations,
      onFormSubmit: this.#onFormSubmit,
      onFormCancel: this.#onFormCancel,
    });

    if (prevEventView === null || prevEditPointView === null) {
      render(this.#eventView, this.#container);
      return;
    }

    if (this.#mode === Mode.EDIT) {
      replace(this.#editPointView, prevEditPointView);
    }

    if (this.#mode === Mode.VIEW) {
      replace(this.#eventView, prevEventView);
    }

    remove(prevEventView);
    remove(prevEditPointView);
  }

  delete() {
    remove(this.#eventView);
    remove(this.#editPointView);
  }

  resetView() {
    if (this.#mode !== Mode.VIEW) {
      this.#switchToViewMode();
    }
  }

  #onEditClick = () => this.#switchToEditMode();
  #onFormCancel = () => this.#switchToViewMode();

  #onFormSubmit = (point) => {
    this.#tripEventChangeHandler(point);
    this.#switchToViewMode();
  };

  #onFavoriteClick = () =>
    this.#tripEventChangeHandler({
      ...this.#point,
      isFavorite: !this.#point.isFavorite,
    });

  #switchToEditMode() {
    replace(this.#editPointView, this.#eventView);
    document.addEventListener('keydown', this.#onEscKeydown);

    this.#changeModeHandler();
    this.#mode = Mode.EDIT;
  }

  #switchToViewMode() {
    replace(this.#eventView, this.#editPointView);
    document.removeEventListener('keydown', this.#onEscKeydown);

    this.#mode = Mode.VIEW;
  }

  #onEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#switchToViewMode();
    }
  };
}
