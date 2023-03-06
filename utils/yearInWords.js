import React from 'react';

function YearInWords({ language }) {
  const year = new Date().getFullYear();

  if (language !== 'en') {
    return <span>{year}</span>;
  }

  const englishWordMap = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const getWord = (number) => {
    if (number === 0) {
      return '';
    }
    if (number <= 20) {
      return englishWordMap[number];
    }
    const ones = number % 10;
    const tens = Math.floor(number / 10) * 10;
    return englishWordMap[tens] + (ones ? '-' + englishWordMap[ones] : '');
  };

  const yearInWords =
    getWord(Math.floor(year / 100)) + ' ' + getWord(year % 100);
  return <span>{yearInWords}</span>;
}

export default YearInWords;
