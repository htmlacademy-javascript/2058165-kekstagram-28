import { debounce } from './util.js';
import { sortRandomly, sortByComments} from './util.js';
import { renderThumbnails } from './thumbnails.js';

const RANDOM_PICTURES_COUNT = 10;
const RENDER_DELAY = 500;

const filtersContainer = document.querySelector('.img-filters');
const filterDefault = filtersContainer.querySelector('#filter-default');
const filterRandom = filtersContainer.querySelector('#filter-random');
const filterDiscussed = filtersContainer.querySelector('#filter-discussed');

let currentFilter = filterDefault;

const showFilters = () => filtersContainer.classList.remove('img-filters--inactive');

const getFilteredPhoto = (photos) => {
  switch(currentFilter) {
    case filterDefault:
      return photos;
    case filterRandom:
      return photos.slice().sort(sortRandomly).slice(0, RANDOM_PICTURES_COUNT);
    case filterDiscussed:
      return photos.slice().sort(sortByComments);
    default:
      return photos;
  }
};

const onFilterClick = (evt, photos) => {
  const images = document.querySelectorAll('.picture');
  currentFilter.classList.remove('img-filters__button--active');
  currentFilter = evt.target;
  currentFilter.classList.add('img-filters__button--active');
  images.forEach((image) => {
    image.remove();
  });
  renderThumbnails(getFilteredPhoto(photos));
};

const setFilterChange = (photos) => {
  filtersContainer.addEventListener('click', debounce((evt) => {
    onFilterClick(evt, photos);
  }, RENDER_DELAY));
};

export { showFilters, setFilterChange };
