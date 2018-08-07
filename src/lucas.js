/**
 * Validates that the input is infact a viable candidate for a lucas-sequence.
 * @param {Number} number the input index.
 */
const validate = (number) => {
  if (number < 0 || !(number === parseInt(number, 10))) {
    let error = new Error('Invalid input: must be a positive integer or 0.');

    console.error(error.stack);
    throw error;
  }
  return true;
};

export const lucas = (number) => {
  validate(number);
  if (number === 0) {
    return 2;
  }
  if (number === 1) {
    return 1;
  }
  return lucas(number - 1) + lucas(number - 2);
};

export const lucasSequence = (number) => {
  let sequence = [];

  validate(number);
  for (let index = 0; index <= number; index++) {
    if (index === 0) {
      sequence.push(2); // the defining treat.
    } else if (index === 1) {
      sequence.push(index);
    } else {
      sequence.push(sequence[index - 1] + sequence[index - 2]);
    }
  }
  return sequence;
};
