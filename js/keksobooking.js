import { getRandomInteger } from "./util";

const bildingType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinArr = ['12:00', '13:00', '14:00'];
const checkoutArr = ['12:00', '13:00', '14:00'];
const feachersArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const randomInteger = getRandomInteger(1, 10);

const padNum = (num) => num.toString().padStart(2, 0);

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const randomAbsValue = Math.abs().Math.round(Math.random() * 1000);

 const createAd = () => {
  return {
  author: {avatar: `img/avatars/user${padNum(randomInteger)}.png`},

  location: {
    lat: getRandomArbitrary(35.65000, 35.70000),
    lng: getRandomArbitrary(139.70000, 139,80000)
  },

  offer: {
    title: 'Заголовок предложения',
    address: {locationlat, locationlng},
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
