var recaman = require('../src/index');

/**
 * Testing the get() function.
 */

test('Testing negative number', () => {
  let testValue = recaman.get(-1);

  expect(testValue).toEqual(0);
});
test('Testing 50th number', () => {
  let testValue = recaman.get(50);

  expect(testValue).toEqual(33);
});
test('Testing inputvalidation', () => {
  expect(() => recaman.get('garbage input')).toThrow();
});
