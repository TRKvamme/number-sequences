let recaman = require('./recaman');
let lucas = require('./lucas');
let fibonacci = require('./fibonacci');

module.exports = {
  /**
   *  Gives the Nth number in a recaman sequence
   * @param number The index of the number you want in a recaman-sequence
   * @returns the n-th number of a recaman-sequence
   */
  recaman: recaman.recaman,
  /**
   * Generates a the N first number in a recaman sequence
   *  @param number Length of the recaman sequence you want to produce.
   *  @returns an array of the N first number in a recaman sequence
   */
  recamanSequence: recaman.recamanSequence,
  /**
   *  Gives the Nth number in a fibonacci sequence
   * @param number The index of the number you want in the sequence
   * @returns the n-th number of a fibonacci-sequence
   */
  fibonacci: fibonacci.fibonacci,
  /**
   *  Generates a fibonacci sequence up to and
   * @param number The index of the last number you want in a fibonacci-sequence.
   * @returns the n-th number of a recaman-sequence
   */
  fibonacciSequnce: fibonacci.fibonacciSequence,
  lucas: lucas.lucas,
  lucasSequence: lucas.lucasSequence
};
