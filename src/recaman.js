export function recaman(number) {
  let sequence = [];
  let output = 0;
  let error;

  if (typeof (number) !== 'number') {
    error = new Error('Input must be of type number');
    console.error(error.stack);
    throw error;
  }
  for (let counter = 1; counter <= number; counter++) {
    if (output - counter > 0 && !sequence.includes(output - counter)) {
      output = output - counter;
      sequence.push(output);
    } else {
      output = output + counter;
      sequence.push(output);
    }
  }
  return output;
};
export function recamanSequence(number) {
  let sequence = [];
  let output = 0;
  let error;

  if (typeof (number) !== 'number') {
    error = new Error('Input must be of type number');
    console.error(error.stack);
    throw error;
  }
  for (let counter = 1; counter <= number; counter++) {
    if ((output - counter > 0) && !sequence.includes(output - counter)) {
      output = output - counter;
      sequence.push(output);
    } else {
      output = output + counter;
      sequence.push(output);
    }
  }
  return sequence;
};
