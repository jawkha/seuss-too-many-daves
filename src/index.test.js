var expect = require('chai').expect;
var tooManyDaves = require('./index');

describe('Too many Daves', () => {
  describe('Testing tooManyDaves.all', () => {
    it('should return an array of strings', () => {
      expect(tooManyDaves.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(item => typeof item === 'string');
      }
    });

    it('should have a length of 23', () => {
      expect(tooManyDaves.all).to.have.length(23);
    });

    it('should return all names contained in tooManyDaves', () => {
      var randomName = tooManyDaves.random();
      expect(tooManyDaves.all).to.include(randomName);
    });
  });

  describe('Testing tooManyDaves.fetchByIndex()', () => {
    it('should return the correct name for the specified index', () => {
      var name = tooManyDaves.fetchByIndex(3);
      expect(tooManyDaves.all[3]).to.equal(name);
    });
  });
});
