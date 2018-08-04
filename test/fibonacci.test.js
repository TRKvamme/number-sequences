const fib = require('../lib/sequence.min');

/**
 * Testing fibonacci fuction.
 */
test('Testing 0', () => {
  let testValue = fib.fibonacci(0);

  expect(testValue).toEqual(0);
});

test('Testing 1', () => {
  let testValue = fib.fibonacci(1);

  expect(testValue).toEqual(1);
});
test('Testing 10', () => {
  let testValue = fib.fibonacci(10);

  expect(testValue).toEqual(55);
});

test('Testing -1', () => {
  expect(() => fib.fibonacci(-1)).toThrow();
});

test('Testing String', () => {
  expect(() => fib.fibonacci('garbage input.')).toThrow();
});

/**
 * Testing fibonacciSequence function.
 */
test('Testing 1', ()=> {
  let testSequnce = fib.fibonacciSequnce(1);

  expect(testSequnce).toEqual([0, 1]);
});
test('Testing 10', () => {
  let testSequnce = fib.fibonacciSequnce(10);

  expect(testSequnce).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

test('Testing -1', () => {
  expect(() => fib.fibonacciSequnce(-1)).toThrow();
});

test('Testing String', () => {
  expect(() => fib.fibonacciSequnce('garbage input.')).toThrow();
});
