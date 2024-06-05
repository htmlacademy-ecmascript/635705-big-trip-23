import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/point-model.js';

const filters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const pointModel = new PointModel();
pointModel.init();

const boardPresenter = new BoardPresenter({
  filters,
  boardContainer: tripEvents,
  pointModel,
});

boardPresenter.init();
