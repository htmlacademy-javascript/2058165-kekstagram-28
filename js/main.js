import {createPhotoDescriptions} from './data.js';
import {renderThumbnails} from './thumbnails.js';

const photos = createPhotoDescriptions();
renderThumbnails(photos);
