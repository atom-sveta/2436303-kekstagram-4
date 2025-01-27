import { getRandomInteger, getRandomArrayElement, padNum, getRandomArray, getRandomFloat} from './util';

const MAX_NUM_IMAGE_ADDRESSES = 10;
const TITLE = ['Продаю', 'Покупаю', 'Сдаю', 'Сниму '];
const BILDING_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinArr = ['12:00', '13:00', '14:00'];
const checkoutArr = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
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

// Ф-ция создает одно объявление
const createAd = () => {
  const location = {
    lat: getRandomFloat(MIN_LAT, MAX_LAT, 5),
    lng: getRandomFloat(MIN_LNG, MAX_LNG, 5),
  };
  return {
    author: {avatar: `img/avatars/user${padNum(getRandomInteger(1, MAX_NUM_IMAGE_ADDRESSES))}.png`},
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${location.lat},  ${location.lng}`,
      price: `${getRandomInteger(1000, 1000000)} Pуб.`,
      type: getRandomArrayElement(BILDING_TYPE),
      rooms: getRandomInteger(1, 6),
      guests: getRandomInteger(1, 12),
      checkin: getRandomArrayElement(checkinArr),
      checkout: getRandomArrayElement(checkoutArr),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS2),
      photos: getRandomArray(PHOTOS),
    }
  };
};

createAd();
// console.log(createAd());
