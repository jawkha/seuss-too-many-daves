const uniqueRandomArray = require('unique-random-array');
const tooManyDaves = require('./names.json');

const fetchByIndex = index => {
  return tooManyDaves[index] ? tooManyDaves[index] : 'Nothing found at the specified index value.';
};

module.exports = {
  fetchByIndex,
  all: tooManyDaves,
  random: uniqueRandomArray(tooManyDaves)
};
