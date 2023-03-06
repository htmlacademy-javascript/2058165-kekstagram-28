import {getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator} from './util.js';

const PHOTO_DESCRIPTIONS_COUNT = 25;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const AVATAR_COUNT_MIN = 1;
const AVATAR_COUNT_MAX = 6;
const COMMENT_ID_MIN = 1;
const COMMENT_ID_MAX = 300;
const FOTO_ID_MIN = 1;
const FOTO_ID_MAX = 25;
const URL_ID_MIN = 1;
const URL_ID_MAX = 25;

const messageRange = {
  MIN: 1,
  MAX: 2,
};
const commentRange = {
  MIN: 3,
  MAX: 11,
};

const NAMES = [
  'Илья',
  'Андрей',
  'Наталья',
  'Александр',
  'Алексей',
  'Елена',
  'Владимир',
  'Егор',
  'Ольга',
  'Кира',
  'Лилия',
  'Роман',
  'Олег',
  'Яна',
  'Евгений',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Серьёзное отношение к чему бы то ни было в этом мире является роковой ошибкой.',
  'Все будет правильно, на этом построен мир.',
  'Per aspera ad astra.',
  'Молчание всегда наполнено словами.',
  'Моя жизнь - мои правила.',
  'Жизнь всегда происходит сейчас.',
  'Все дело в мгновении. Оно определяет жизнь.',
  'С первым осенним холодком жизнь начнется сначала.',
  'Если это не весело, значит вы делаете это неправильно.',
  'Do not panic!',
  'Разум бессилен перед криком сердца.',
];

const generatePhotoId = createRandomIdFromRangeGenerator(FOTO_ID_MIN, FOTO_ID_MAX);
const generateCommentId = createRandomIdFromRangeGenerator(COMMENT_ID_MIN, COMMENT_ID_MAX);
const generateUrlId = createRandomIdFromRangeGenerator(URL_ID_MIN, URL_ID_MAX);

const createMessage = () => Array.from({length: getRandomInteger(messageRange.MIN, messageRange.MAX)}, () => getRandomArrayElement(MESSAGES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_COUNT_MIN, AVATAR_COUNT_MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createCommentsArray = () => Array.from({length: getRandomInteger(commentRange.MIN, commentRange.MAX)}, createComment);

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
  comments: createCommentsArray(),
});

const createPhotoDescriptions = () => Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);

export {createPhotoDescriptions};
