import TripFiltersView from './view/trip-filters-view.js';
import TripSortView from './view/trip-sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { render } from './render.js';

const filters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({ boardContainer: tripEvents });

render(new TripFiltersView(), filters);
render(new TripSortView(), tripEvents);

boardPresenter.init();
