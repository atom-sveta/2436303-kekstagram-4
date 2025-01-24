// Функция для проверки длины строки.
const checkStringLength = (string, MaxLength) => string.length <= MaxLength;
checkStringLength('проверяемая строка', 20);

// Функция для проверки палиндрома.
/*
const isPalidrome = (rawString) => {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.at(i);
  }

  return reversedString === string
};
*/

// Пример с меньшим количеством операций
const checkPalidrome = (rawString) => {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {

    if (string.at(i) !== string.at(-1 -i)) {
      return false;
    }
  }
  return true;
};
checkPalidrome('Лёша на полке клопа нашёл');
// console.log(checkPalidrome('топот'));
// console.log(checkPalidrome('ДовОд'));
// console.log(checkPalidrome('Кекс'));
// console.log(checkPalidrome('Лёша на полке клопа нашёл'));

// Функция принимает строку
// Извлекает содержащиеся в ней цифры от 0 до 9
// Возвращает их в виде целого положительного числа
// Если в строке нет ни одной цифры, функция должна вернуть NaN.
function extractNumbers (arg) {
  const string1 = arg.toString(); // Нормализуем данные, приводим к единообразию
  let result = ''; // чтобы числа не складывались друг с другом, а приписывались
  for (let i = 0; i < string1.length; i++) {
    if (!Number.isNaN(parseInt(string1[i], 10))) {
      result += string1[i];
    }
  }
  return parseInt(result, 10);
}
extractNumbers('2023 год');
// let qwe = '1234p';
// const string = qwe.toString();
// console.log(!Number.isNaN(parseInt(string[2], 10) ));
// console.log(extractNumbers('2023 год'));
// console.log(extractNumbers('ECMAScript 2022'));
// console.log(extractNumbers('1 кефир, 0.5 батона'));
// console.log(extractNumbers('агент 007'));
// console.log(extractNumbers('а я томат'));

// Callback
// function saySomething(something) {
//   console.log(something);
// }

// function doSomething(callback) {
//   callback();
// }

// doSomething(() => saySomething('afdfsfwe'));

const testString = 'awav';

function slice(string2, startIndex = 0, endIndex = string2.length) {
  let result2 = '';

  /* Если в вызове функции нет этих аргументов
  if (!startIndex){
    startIndex = 0;
  }

  if (!endIndex){
    endIndex = string2.length;
  }
  */

  for (let i = startIndex; i < endIndex; i++) {
    result2 += string2[i];
  }
  return result2;
}

// console.log(testString.slice());
// console.log(testString.slice(1));
// console.log(testString.slice(1, 3));
// console.log('----');
// console.log(slice(testString));
// console.log(slice(testString, 1));
// console.log(slice(testString, 1, 3));

function getIndexOf (string3, subString, startIndex = 0) {
  for (let i = startIndex; i <= string3.length - subString.length; i++) {
    if(string3.slice(i, i + subString.length) === subString) {
      return i;
    }

    return -1;
  }
}
getIndexOf(testString, 'wa');
// console.log(testString.indexOf('wa'));
// console.log('----');
// console.log(getIndexOf(testString, 'wa'));

const toMinutes = (str) => str
  .split(":")
  .reverse()
  .reduce((acc, currentValue, i) => acc + currentValue * Math.pow(60, i), 0);
// console.log(toMinutes('14:23'));

function getTimeForBusiness(currentValue, endtWorkTime, meetingStartTime, durationOfTheMeeting) {
  const start = toMinutes(currentValue);
  const end = toMinutes(endtWorkTime);
  const meeting = toMinutes(meetingStartTime);
  // console.log(start);
  // console.log(end);
  // console.log(meeting);
  const rtt = meeting + durationOfTheMeeting;
  // console.log(rtt);
  const time = (start <= meeting && end >= rtt) ? true : false
  return time
};

console.log(getTimeForBusiness('08:00', '17:30', '14:00', 90));
console.log(getTimeForBusiness('8:0', '10:0', '8:0', 120));
console.log(getTimeForBusiness('08:00', '14:30', '14:00', 90));
console.log(getTimeForBusiness('14:00', '17:30', '08:0', 90));
console.log(getTimeForBusiness('8:00', '17:30', '08:00', 900));
