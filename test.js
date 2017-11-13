const assert = require('assert');
const Joi = require('joi');
const JoiB = require('joi-browser');

const uuidv4RegExp = '[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}';
const uuidv4regex = new RegExp(`${uuidv4RegExp}`, 'ig');
const valid_status = ['PLANNING', 'CONFIRMED', 'STARTED', 'ENDED', 'CANCELLED'];

const joi_schema = Joi.object().keys({
  uuid: Joi.string().regex(uuidv4regex).required(),
  status: Joi.string().required().valid(valid_status)
});

const joi_browser_schema = JoiB.object().keys({
  uuid: JoiB.string().regex(uuidv4regex).required(),
  status: JoiB.string().required().valid(valid_status)
});

const sample_valid_data = {
  uuid: '5fbc93a9-d566-4c64-b057-2a5b7ac8d39b',
  status: 'CONFIRMED'
}

const joi_result = Joi.validate(sample_valid_data, joi_schema);
const joi_browser_result = JoiB.validate(sample_valid_data, joi_browser_schema);

console.log(' - - - - - - - - - - - - - - - - - - - joi_result (valid data):');
console.log(joi_result);
console.log(' - - - - - - - - - - - - - - - joi_browser_result (valid data):');
console.log(joi_browser_result);
console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
// valid data test:
console.log('joi:', joi_result);
console.log('joi-browser:', joi_browser_result);
assert.deepEqual(joi_result.error, joi_browser_result.error);
assert.deepEqual(joi_result.value, joi_browser_result.value)

const invalid_data = {
  uuid: '5fbc93a9-d566-4c64-b057-2a5b7ac8d39b',
  status: 'INVALID'
}

const joi_result_invalid = Joi.validate(invalid_data, joi_schema);
const joi_browser_result_invalid = JoiB.validate(invalid_data, joi_browser_schema);

console.log(' - - - - - - - - - - - - - - - - - - joi_result (invalid data):');
console.log(joi_result_invalid);
console.log(' - - - - - - - - - - - - - - joi_browser_result (invalid data):');
console.log(joi_browser_result_invalid);
console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');

let undefined_data; // undefined
assert.equal(typeof undefined_data, 'undefined');

const joi_result_undefined = Joi.validate(undefined_data, joi_schema);
const joi_browser_result_undefined = JoiB.validate(undefined_data, joi_browser_schema);

console.log(' - - - - - - - - - - - - - - - - - - joi_result (undefined data):');
console.log(joi_result_undefined);
console.log(' - - - - - - - - - - - - - - joi_browser_result (undefined data):');
console.log(joi_browser_result_undefined);
console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
