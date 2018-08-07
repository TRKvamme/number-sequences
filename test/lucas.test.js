const lucas = require('../src/index');

// testing lucas
test('lucas, testing 0-5', () => {
  let number0 = lucas.lucas(0);
  let number1 = lucas.lucas(1);
  let number2 = lucas.lucas(2);
  let number3 = lucas.lucas(3);
  let number4 = lucas.lucas(4);
  let number5 = lucas.lucas(5);

  expect(number0).toEqual(2);
  expect(number1).toEqual(1);
  expect(number2).toEqual(3);
  expect(number3).toEqual(4);
  expect(number4).toEqual(7);
  expect(number5).toEqual(11);
});

test('lucas, input validation', () => {
  expect(() => lucas.lucas('garbage')).toThrow();
  expect(() => lucas.lucas(1.2)).toThrow();
  expect(() => lucas.lucas(-1)).toThrow();
});

// testing lucasSequence.
test('lucasSequences, 0-5', () => {
  let seq0 = lucas.lucasSequence(0);
  let seq1 = lucas.lucasSequence(1);
  let seq2 = lucas.lucasSequence(2);
  let seq3 = lucas.lucasSequence(3);
  let seq4 = lucas.lucasSequence(4);
  let seq5 = lucas.lucasSequence(5);

  expect(seq0).toEqual([2]);
  expect(seq1).toEqual([2, 1]);
  expect(seq2).toEqual([2, 1, 3]);
  expect(seq3).toEqual([2, 1, 3, 4]);
  expect(seq4).toEqual([2, 1, 3, 4, 7]);
  expect(seq5).toEqual([2, 1, 3, 4, 7, 11]);
});
test('lucasSequence, input validation', () => {
  expect(() => lucas.lucasSequence(-1)).toThrow();
  expect(() => lucas.lucasSequence(1.6)).toThrow();
  expect(() => lucas.lucasSequence('garbage')).toThrow();
  expect(() => lucas.lucasSequence('garbage')).toThrow();
});

