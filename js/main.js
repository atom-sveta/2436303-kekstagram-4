// Кексаграм
const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Вау, ты выглядишь так красиво!',
  'Обалдеть, эти глаза, как жемчужины.',
  'Улыбка на миллион.',
  'Как у тебя получается всегда быть такой идеальной?',
  'Ты сногсшибательная!',
  'Нельзя быть такой совершенной!',
  'Это выглядит так красиво.',
  'Хотел бы я дважды поставить лайк.',
];

const NAMES = [
  'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT)},
    createComment,
  ),
});

createPicture();

const getPictures = () => Array.from(
  {length: PICTURE_COUNT},
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

console.log(getPictures());


// Кексобукинг

const MAX_NUM_IMAGE_ADDRESSES = 10;
const TITLE = ['Продаю', 'Покупаю', 'Сдаю', 'Сниму '];
const BILDING_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinArr = ['12:00', '13:00', '14:00'];
const checkoutArr = ['12:00', '13:00', '14:00'];
const feachersArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS2 = [
  'Лучшая цена и расположение',
  'Тихо и уютно',
  'В самом центре',
  'Лучшее семейное гнёздышко',
  'Красивая панорама из окна',
  'Дёшево и сердито',
  'Всё лучшее для тебя',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;

const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.abs(Math.floor(result));
// };

const padNum = (num) => num.toString().padStart(2, 0);

const getRandomArrayIndex = (elements) => getRandomInteger(0, elements.length - 1);
// const getRandomArrayElement = (elements) => elements[getRandomArrayIndex(elements)];

const getFeachers= () => Array.from(
  {length: getRandomArrayIndex(feachersArr)},
  () => getRandomArrayElement(feachersArr),
);

const getPhotos= () => Array.from(
  {length: getRandomArrayIndex(PHOTOS)},
  () => getRandomArrayElement(PHOTOS),
);

const randomAbsValue = Math.abs(Math.round(Math.random() * 1000));

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const createAd = () => {
  const location = {
    lat: getRandomArbitrary(MIN_LAT, MAX_LAT),
    lng: getRandomArbitrary(MIN_LNG, MAX_LNG),
  };
  return {
    author: {avatar: `img/avatars/user${padNum(getRandomInteger(1, MAX_NUM_IMAGE_ADDRESSES))}.png`},
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${location.lat},  ${location.lng}`,
      price: `${randomAbsValue  } Pуб.`,
      type: getRandomArrayElement(BILDING_TYPE),
      rooms: getRandomInteger(1, 6),
      guests: getRandomInteger(1, 12),
      checkin: getRandomArrayElement(checkinArr),
      checkout: getRandomArrayElement(checkoutArr),
      features: getFeachers(),
      description: getRandomArrayElement(DESCRIPTIONS2),
      photos: getPhotos(PHOTOS),
    }
  };
};

console.log(createAd());
