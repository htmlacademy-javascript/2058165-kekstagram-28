import {createPhotoDescriptions} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import './form.js';
import './validation-form.js';
import './scale.js';

const photos = createPhotoDescriptions();
renderThumbnails(photos);
