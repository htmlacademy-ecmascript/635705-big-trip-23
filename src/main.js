import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/point-model.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
pointModel.init();

const boardPresenter = new BoardPresenter({
  filtersContainer,
  tripEventsContainer,
  pointModel,
});

boardPresenter.init();
