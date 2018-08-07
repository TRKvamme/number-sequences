const sequence = require('../src/index');

/**
 * testing the recamanSequnce function.
 */
test('Testing empty', () => {
  let test = sequence.recamanSequence(0);

  expect(test).toEqual([]);
});
test('First 5 in a recaman sequence', () => {
  let test = sequence.recamanSequence(5);

  expect(test).toEqual([1, 3, 6, 2, 7]);
});
test('First 10 in a recaman sequence', () => {
  let test = sequence.recamanSequence(10);

  expect(test).toEqual([1, 3, 6, 2, 7, 13, 20, 12, 21, 11]);
});

/**
 * Testing the recaman function.
 */
test('Testing negative number', () => {
  let testValue = sequence.recaman(-1);

  expect(testValue).toEqual(0);
});
test('Testing 50th number', () => {
  let testValue = sequence.recaman(50);

  expect(testValue).toEqual(33);
});
test('Testing inputvalidation', () => {
  expect(() => sequence.recaman('garbage input')).toThrow();
});
