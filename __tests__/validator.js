'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  
  });

  it('arrays', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  
    
  });

  it('objects', () => {
    
    let obj = {x:'y'};
    
    expect(validator.isObject(obj)).toBeTruthy();
    
  });
    
    

  it('booleans', () => {
    let bool = false;
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validator.isFunction(func)).toBeTruthy();
  });

});

describe('validator module performs complex validations', () => {

it('If the object is an empty or not', () => {
  const susan = {
    id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],
  }; 
  expect(validator.objectKeys(susan)).toBeTruthy();
});
});
describe('validator module performs complex validations', () => {

const susan = {
    id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],
  }; 

    it('validates the presence of required object properties at any level', () => {
      // i.e. does person.hair.color exist and have a good value, not just person.hair
      expect(validator.notEmptyValues(susan)).toBeFalsy();
    });
  
    it('validates the proper types of object properties', () => {
      // i.e. person.name must be a string, etc.
      expect(validator.typeValues(susan)).toBeTruthy();
    });
  
    it('validates the types of values contained in an array', () => {
      // i.e. an array of all strings or numbers
            expect(validator.valueInArray(susan)).toBeFalsy();
    });
  
    it('validates a value array against an approved list', () => {
      // i.e. a string might only be allowed to be "yes" or "no"
      expect(validator.noValueInArray(susan)).toBeFalsy();
    });
});  