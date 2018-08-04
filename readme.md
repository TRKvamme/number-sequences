# Integer-sequences

Library containing functions for generating and extracting n'th number of a selection of popular number sequences.

Currently containing:
 - Recaman sequence
    - [x] recaman(n) : returns n'th number.
    - [x] recamanSequence(n) : returns an array of <sub>0...n</sub> numbers.
 - Fibonacci sequence
    - [x] fibonacci(n) : returns n'th number.
    - [x] fibonacciSequence(n) : returns an array of <sub>0...n</sub> numbers.

## Installation
    npm install int-seq-generator --save
    
## Usage
    import intseq from 'int-seq-generator';
    
    intseq.recaman(5); // 7
    intseq.fibonacciSequence(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    **OR**

    import {recaman} from 'int-seq-generator';

    recaman(1); // 1
    