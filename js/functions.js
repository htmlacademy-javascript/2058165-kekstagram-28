// Функция для проверки длины строки.

const checkStringLength = (string, length) => (string.length <= length);

// Функция для проверки, является ли строка палиндромом.

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
  return reverseString === tempString;
};

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const getNumber = (string) => {
  string = string.toString();

  let newNumber = '';

  for (let i = 0; i < string.length; i++) {
    const currentSymbol = parseInt(string[i], 10);

    if (!isNaN(currentSymbol)) {
      newNumber += currentSymbol;
    }
  }
  return parseInt(newNumber, 10);
};

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

const notPadStart = (string, minLength, pad) => {

  while (minLength > string.length) {
    const srtingWithPad = string.length + pad.length;
    const actualPad = srtingWithPad <= minLength ? pad : pad.slice(0, minLength - srtingWithPad);
    string = actualPad + string;
  }
  return string;
};
