import AbstractView from '../framework/view/abstract-view';
import { Destination, OfferItem, Point } from '../types/types';
import{ getDateDuration, formatStringToDateTime, formatStringToShortDateTime, formatStringToHumanizeDateTime, formatStringToTime } from '../utils';

function createOfferItem(offers: OfferItem[]) {
  return offers.map(({title, price}: OfferItem) => /*html*/`<li class="event__offer">
<span class="event__offer-title">${title}</span>
&plus;&euro;&nbsp;
<span class="event__offer-price">${price}</span>
</li>`).join('');
}

interface GeneralProps {
  point: Point;
  currentDestination: Destination;
  currentOffers: OfferItem[];
}

type PointViewProps = GeneralProps & {
  onEditClick(): void;
  onFavoriteClick(): void;
}

function createTemplate({point, currentDestination, currentOffers}: GeneralProps) {
  const {price, dateFrom, dateTo, favorite, type} = point;

  const hasFavorite = favorite ? '--active' : '';
  const checkedOffers = point.offers.map((offerId: OfferItem['id']) => currentOffers.find(({id}) => id === offerId)) as OfferItem[];

  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${formatStringToShortDateTime(dateFrom)}">${formatStringToHumanizeDateTime(dateFrom)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${currentDestination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${formatStringToDateTime(dateFrom)}">${formatStringToTime(dateFrom)}</time>
        &mdash;
        <time class="event__end-time" datetime="${formatStringToDateTime(dateTo)}">${formatStringToTime(dateTo)}</time>
      </p>
      <p class="event__duration">${getDateDuration(dateTo, dateFrom)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${createOfferItem(checkedOffers)}
    </ul>
    <button class="event__favorite-btn event__favorite-btn${hasFavorite}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
  </li>`;
}

export default class PointView extends AbstractView {
  #point: Point;
  #currentDestination: Destination;
  #currentOffers: OfferItem[] = [];
  #onEditClick: () => void;
  #onFavoriteClick: () => void;

  constructor({point, currentDestination, currentOffers, onEditClick, onFavoriteClick}: PointViewProps) {
    super();
    this.#point = point;
    this.#currentDestination = currentDestination;
    this.#currentOffers = currentOffers;
    this.#onEditClick = onEditClick;
    this.#onFavoriteClick = onFavoriteClick;

    this.element.querySelector<HTMLButtonElement>('.event__rollup-btn')?.addEventListener('click', this.#editClickHandler);
    this.element.querySelector<HTMLButtonElement>('.event__favorite-btn')?.addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createTemplate({
      point: this.#point,
      currentDestination: this.#currentDestination,
      currentOffers: this.#currentOffers
    });
  }

  #editClickHandler = (evt: Event) => {
    evt.preventDefault();
    this.#onEditClick();
  };

  #favoriteClickHandler = (evt: Event) => {
    evt.preventDefault();
    this.#onFavoriteClick();
  };
}

