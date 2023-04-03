import {createPhotoDescriptions} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import './form.js';
import './validation-form.js';
import './scale.js';
import './effects.js';

const photos = createPhotoDescriptions();
renderThumbnails(photos);
