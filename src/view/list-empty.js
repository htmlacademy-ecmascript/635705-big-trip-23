import AbstractView from '../framework/view/abstract-view';
import { ListEmptyMessages } from '../const';

const createListEmptyTemplate = (filter) =>
  `<p class="trip-events__msg">${ListEmptyMessages[filter]}</p>`;

export default class ListEmptyView extends AbstractView {
  #filter = '';

  constructor({ filter }) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createListEmptyTemplate(this.#filter);
  }
}
