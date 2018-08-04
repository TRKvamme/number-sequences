(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("intseq", [], factory);
	else if(typeof exports === 'object')
		exports["intseq"] = factory();
	else
		root["intseq"] = factory();
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fibonacciSequence = exports.fibonacci = void 0;\n\n/**\r\n * Validates if input if fit to make a fibonacci sequence from.\r\n * @param {*} number input you want to validate.\r\n */\nvar validate = function validate(number) {\n  if (number < 0 || typeof number !== 'number') {\n    var error = new Error('Invalid input: must be a positive integer or 0.');\n    console.error(error.stack);\n    throw error;\n  }\n\n  return true;\n};\n/**\r\n *\r\n * @param {Number} number the index of the sequence you want returned.\r\n */\n\n\nvar fibonacci = function fibonacci(number) {\n  validate(number);\n\n  if (number === 0 || number === 1) {\n    return number;\n  }\n\n  return fibonacci(number - 2) + fibonacci(number - 1);\n};\n/**\r\n *\r\n * @param {Number} number the index of the final fibonacci number in the sequence.\r\n */\n\n\nexports.fibonacci = fibonacci;\n\nvar fibonacciSequence = function fibonacciSequence(number) {\n  var sequence = [];\n  validate(number);\n\n  for (var index = 0; index <= number; index++) {\n    if (index === 0 || index === 1) {\n      sequence.push(index);\n    } else {\n      sequence.push(sequence[index - 1] + sequence[index - 2]);\n    }\n  }\n\n  return sequence;\n};\n\nexports.fibonacciSequence = fibonacciSequence;\n\n//# sourceURL=webpack://intseq/./src/fibonacci.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar recaman = __webpack_require__(/*! ./recaman */ \"./src/recaman.js\");\n\nvar fibonacci = __webpack_require__(/*! ./fibonacci */ \"./src/fibonacci.js\");\n\nmodule.exports = {\n  /**\r\n   *  Gives the Nth number in a recaman sequence\r\n   * @param number The index of the number you want in a recaman-sequence\r\n   * @returns the n-th number of a recaman-sequence\r\n   */\n  recaman: recaman.recaman,\n\n  /**\r\n   * Generates a the N first number in a recaman sequence\r\n   *  @param number Length of the recaman sequence you want to produce.\r\n   *  @returns an array of the N first number in a recaman sequence\r\n   */\n  recamanSequence: recaman.recamanSequence,\n\n  /**\r\n   *  Gives the Nth number in a fibonacci sequence\r\n   * @param number The index of the number you want in the sequence\r\n   * @returns the n-th number of a fibonacci-sequence\r\n   */\n  fibonacci: fibonacci.fibonacci,\n\n  /**\r\n   *  Generates a fibonacci sequence up to and\r\n   * @param number The index of the last number you want in a fibonacci-sequence.\r\n   * @returns the n-th number of a recaman-sequence\r\n   */\n  fibonacciSequnce: fibonacci.fibonacciSequence\n};\n\n//# sourceURL=webpack://intseq/./src/index.js?");

/***/ }),

/***/ "./src/recaman.js":
/*!************************!*\
  !*** ./src/recaman.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.recaman = recaman;\nexports.recamanSequence = recamanSequence;\n\nfunction recaman(number) {\n  var sequence = [];\n  var output = 0;\n  var error;\n\n  if (typeof number !== 'number') {\n    error = new Error('Input must be of type number');\n    console.error(error.stack);\n    throw error;\n  }\n\n  for (var counter = 1; counter <= number; counter++) {\n    if (output - counter > 0 && !sequence.includes(output - counter)) {\n      output = output - counter;\n      sequence.push(output);\n    } else {\n      output = output + counter;\n      sequence.push(output);\n    }\n  }\n\n  return output;\n}\n\n;\n\nfunction recamanSequence(number) {\n  var sequence = [];\n  var output = 0;\n  var error;\n\n  if (typeof number !== 'number') {\n    error = new Error('Input must be of type number');\n    console.error(error.stack);\n    throw error;\n  }\n\n  for (var counter = 1; counter <= number; counter++) {\n    if (output - counter > 0 && !sequence.includes(output - counter)) {\n      output = output - counter;\n      sequence.push(output);\n    } else {\n      output = output + counter;\n      sequence.push(output);\n    }\n  }\n\n  return sequence;\n}\n\n;\n\n//# sourceURL=webpack://intseq/./src/recaman.js?");

/***/ })

/******/ });
});