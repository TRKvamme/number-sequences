
/**
 * Validates if input if fit to make a fibonacci sequence from.
 * @param {*} number input you want to validate.
 */
const validate = (number) => {
  if (number < 0 || typeof (number) !== 'number') {
    let error = new Error('Invalid input: must be a positive integer or 0.');

    console.error(error.stack);
    throw error;
  }
  return true;
};

/**
 *
 * @param {Number} number the index of the sequence you want returned.
 */
export const fibonacci = (number) => {
  validate(number);
  if (number === 0 || number === 1) {
    return number;
  }
  return fibonacci(number - 2) + fibonacci(number - 1);
};
/**
 *
 * @param {Number} number the index of the final fibonacci number in the sequence.
 */
export const fibonacciSequence = (number) => {
  let sequence = [];

  validate(number);
  for (let index = 0; index <= number; index++) {
    if (index === 0 || index === 1) {
      sequence.push(index);
    } else {
      sequence.push(sequence[index - 1] + sequence[index - 2]);
    }
  }
  return sequence;
};

