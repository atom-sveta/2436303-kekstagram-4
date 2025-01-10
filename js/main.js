// id опубликованной фотографии. Число от 1 до 25. Не должны повторяться
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Не должны повторяться
// likes Случайное число от 15 до 200
// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createObject () {

  return {
    id: getRandomInteger(1, 25),
    url: `photos/${  getRandomInteger(1, 25)  }.jpg`,
    description: 'Описание фотографии',
    likes: getRandomInteger(15, 200),
    comments: [
      {
        id: Math.round(Math.random() * 100),
        avatar: `img/avatar-${getRandomInteger(1, 25)}.svg`,
        message: getRandomArrayElement(TEXT),
        name: getRandomArrayElement(NAMES),
      },
    ],
  };
}

createObject();

const objects = Array.from({length: 25},createObject);

// Кексобукинг

const bildingType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinArr = ['12:00', '13:00', '14:00'];
const checkoutArr = ['12:00', '13:00', '14:00'];
const feachersArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const randomInteger = getRandomInteger(1, 10);

const padNum = (num) => num.toString().padStart(2, 0);

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const randomAbsValue = Math.abs(Math.round(Math.random() * 1000));

 const createAd = () => {
  return {
  author: {avatar: `img/avatars/user${padNum(randomInteger)}.png`},

  location: {
    lat: getRandomArbitrary(35.65000, 35.70000),
    lng: getRandomArbitrary(139.70000, 139,80000)
  },

  offer: {
    title: 'Заголовок предложения',
    address: {{location.lat}; {location.lng}},
    price: randomAbsValue,
    type: getRandomInteger(0, bildingType.length - 1),
    rooms: randomAbsValue,
    guests: randomAbsValue,
    checkin: getRandomInteger(0, checkinArr.length - 1),
    checkout: getRandomInteger(0, checkoutArr.length - 1),
    features: [],
    description: 'Описание помещения',
    photos: []
  },

  }
};

createAd()
