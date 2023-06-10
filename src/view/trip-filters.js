import AbstractView from '../framework/view/abstract-view.js';

function createFilterItem(filterPoint) {
  const{type, count} = filterPoint;

  return `  <div class="trip-filters__filter">
  <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${count ? '' : 'disabled'} ${type === 'everything' && count ? 'checked' : ''}>
  <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
</div>
`;
}

function createTemplate(filterPoints) {
  return `<form class="trip-filters" action="#" method="get">
  ${filterPoints.map(createFilterItem).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}

export default class FiltersView extends AbstractView {
  #filterPoints;

  constructor(filterPoints) {
    super();
    this.#filterPoints = filterPoints;
  }

  get template() {
    return createTemplate(this.#filterPoints);
  }
}