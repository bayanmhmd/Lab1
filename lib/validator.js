'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};

validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};


validator.isBoolean = (input) => {
  if (input == true || input == false);  // this conditon depend if we have two type 
  return typeof input === 'boolean';
};
 //////////////// objects ////////////

 // is my object have a keys  or not?!

 validator.objectKeys = function (input) {
  if (!Object.keys(input)) { return false };
  return true;
};

// what is my type of value in the keys ?!

validator.typeValues = function (input){
  
   if (!Object.values(input)){return false};
   return Object.values(input).every( inp => typeof inp === 'string' || typeof inp === 'number' || typeof inp ==='object' ) 
   
};

// i want to check if iside my value there is array and if there null or not 

validator.noValueInArray = function (input) {
  if (!Object.values(input)) { return false };       //// Object.values an array
  return Object.values(input).every(value =>  value === 'object' && value.length === 0)
};

// i want to check if my keys have a values 

validator.notEmptyValues = function (input) {
   if (Object.keys(input)) {Object.keys(input).every(value => {
        return this.isObject(value);
      })
  }
  return false;
};

//   return Object.values(input).every( inp => typeof inp === 'string' || typeof inp === 'number' || typeof inp ==='object' ) 
   
// };

validator.valueInArray = function (input) {
   if (!Object.values(input)) { return false };
  return Object.values(input).every(value => typeof value === 'string' || typeof value === 'number')
};
