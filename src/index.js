module.exports = {
  /**
   * Generates a the N first number in a recaman sequence
   *  @param number Number of recaman numbers.
   *  @returns an array of the N first number in a recaman sequence
   */
  sequence: function (number) {
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
  },
  /**
   *  Gives the Nth number in a recaman sequence
   * @param number The index of the number you want in a recaman-sequence
   * @returns the n-th number of a recaman-sequence
   */
  get: function (number) {
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
  }
};
