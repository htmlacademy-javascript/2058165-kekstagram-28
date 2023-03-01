const PHOTO_DESCRIPTIONS_COUNT = 25;

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

const getRandomInteger = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(1, 300);
const generateUrl = createRandomIdFromRangeGenerator(1, 25);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)}`,
  name: `${getRandomArrayElement(NAMES)}`,
});

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrl()}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  likes: getRandomInteger(15, 200),
  comments: createComment(1, 3),
});

const similarPhotoDescriptions = () => Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);

similarPhotoDescriptions();
