(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("int-seq-generator", [], factory);
	else if(typeof exports === 'object')
		exports["int-seq-generator"] = factory();
	else
		root["int-seq-generator"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fibonacci.js":
/*!**************************!*\
  !*** ./src/fibonacci.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fibonacciSequence = exports.fibonacci = void 0;

/**
 * Validates if input if fit to make a fibonacci sequence from.
 * @param {*} number input you want to validate.
 */
var validate = function validate(number) {
  if (number < 0 || !(number === parseInt(number, 10))) {
    var error = new Error('Invalid input: must be a positive integer or 0.');
    console.error(error.stack);
    throw error;
  }

  return true;
};
/**
 *
 * @param {Number} number the index of the sequence you want returned.
 */


var fibonacci = function fibonacci(number) {
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


exports.fibonacci = fibonacci;

var fibonacciSequence = function fibonacciSequence(number) {
  var sequence = [];
  validate(number);

  for (var index = 0; index <= number; index++) {
    if (index === 0 || index === 1) {
      sequence.push(index);
    } else {
      sequence.push(sequence[index - 1] + sequence[index - 2]);
    }
  }

  return sequence;
};

exports.fibonacciSequence = fibonacciSequence;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var recaman = __webpack_require__(/*! ./recaman */ "./src/recaman.js");

var lucas = __webpack_require__(/*! ./lucas */ "./src/lucas.js");

var fibonacci = __webpack_require__(/*! ./fibonacci */ "./src/fibonacci.js");

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

/***/ }),

/***/ "./src/lucas.js":
/*!**********************!*\
  !*** ./src/lucas.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lucasSequence = exports.lucas = void 0;

/**
 * Validates that the input is infact a viable candidate for a lucas-sequence.
 * @param {Number} number the input index.
 */
var validate = function validate(number) {
  if (number < 0 || !(number === parseInt(number, 10))) {
    var error = new Error('Invalid input: must be a positive integer or 0.');
    console.error(error.stack);
    throw error;
  }

  return true;
};

var lucas = function lucas(number) {
  validate(number);

  if (number === 0) {
    return 2;
  }

  if (number === 1) {
    return 1;
  }

  return lucas(number - 1) + lucas(number - 2);
};

exports.lucas = lucas;

var lucasSequence = function lucasSequence(number) {
  var sequence = [];
  validate(number);

  for (var index = 0; index <= number; index++) {
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

exports.lucasSequence = lucasSequence;

/***/ }),

/***/ "./src/recaman.js":
/*!************************!*\
  !*** ./src/recaman.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recaman = recaman;
exports.recamanSequence = recamanSequence;

function recaman(number) {
  var sequence = [];
  var output = 0;
  var error;

  if (!(number === parseInt(number, 10))) {
    error = new Error('Input must be of type number');
    console.error(error.stack);
    throw error;
  }

  for (var counter = 1; counter <= number; counter++) {
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

;

function recamanSequence(number) {
  var sequence = [];
  var output = 0;
  var error;

  if (!(number === parseInt(number, 10))) {
    error = new Error('Input must be of type number');
    console.error(error.stack);
    throw error;
  }

  for (var counter = 1; counter <= number; counter++) {
    if (output - counter > 0 && !sequence.includes(output - counter)) {
      output = output - counter;
      sequence.push(output);
    } else {
      output = output + counter;
      sequence.push(output);
    }
  }

  return sequence;
}

;

/***/ })

/******/ });
});
//# sourceMappingURL=int-seq-generator.js.map