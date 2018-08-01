var recaman = require('../src/index');

/**
 *
 * testing the
 */
test('Testing empty', () => {
  let test = recaman.sequence(0);

  expect(test).toEqual([]);
});

test('First 5 in a recaman sequence', () => {
  let test = recaman.sequence(5);

  expect(test).toEqual([1, 3, 6, 2, 7]);
});

test('First 10 in a recaman sequence', () => {
  let test = recaman.sequence(10);

  expect(test).toEqual([1, 3, 6, 2, 7, 13, 20, 12, 21, 11]);
});
