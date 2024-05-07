import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import EditPoint from '../view/edit-point-view.js';
import EventView from '../view/event-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  eventsListComponent = new EventsListView();
  eventsItemComponent = new EventsItemView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.eventsListComponent, this.boardContainer);
    render(new EditPoint(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventsListComponent.getElement());
    }
  }
}
