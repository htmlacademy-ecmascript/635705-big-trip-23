import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/point-model.js';

const headerMainElement = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
pointModel.init();

const boardPresenter = new BoardPresenter({
  infoContainer: headerMainElement,
  filterContainer: filtersContainer,
  boardContainer: tripEventsContainer,
  model: pointModel,
});

boardPresenter.init();
