import { debounce } from './util.js';
import { sortRandomly, sortByComments, removeElement } from './util.js';
import { renderThumbnails } from './thumbnails.js';

const RANDOM_PICTURES_COUNT = 10;
const RENDER_DELAY = 500;

const filtersContainerElement = document.querySelector('.img-filters');
const filterDefaultElement = filtersContainerElement.querySelector('#filter-default');
const filterRandomElement = filtersContainerElement.querySelector('#filter-random');
const filterDiscussedElement = filtersContainerElement.querySelector('#filter-discussed');

let currentFilter = filterDefaultElement;

const showFilters = () => filtersContainerElement.classList.remove('img-filters--inactive');

const getFilteredPhoto = (photos) => {
  switch(currentFilter) {
    case filterDefaultElement:
      return photos;
    case filterRandomElement:
      return photos.slice().sort(sortRandomly).slice(0, RANDOM_PICTURES_COUNT);
    case filterDiscussedElement:
      return photos.slice().sort(sortByComments);
    default:
      return photos.slice();
  }
};

const changeFilter = (evt, photos) => {
  document.querySelectorAll('.picture').forEach(removeElement);

  currentFilter.classList.remove('img-filters__button--active');
  currentFilter = evt.target;
  currentFilter.classList.add('img-filters__button--active');

  renderThumbnails(getFilteredPhoto(photos));
};

const setFilterChange = (photos) => {
  filtersContainerElement.addEventListener('click', debounce((evt) => {
    changeFilter(evt, photos);
  }, RENDER_DELAY));
};

export { showFilters, setFilterChange };
