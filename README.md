# joi-browser-test [![Build Status](https://travis-ci.org/nelsonic/joi-browser-test.svg?branch=master)](https://travis-ci.org/nelsonic/joi-browser-test)

Comparison of `joi-browser` and "_standard_" `joi` for validating a schema. <br />
(_investigation into a potential bug with `joi-browser`..._)

## Why?

While attempting to run `joi-browser`
on a project that requires browser-based schema validation,
I cam across what I _think_ is a "bug" ...

Sadly the (_client_) project I'm working on
is `private` so I cannot share the code,
so I'm re-creating it here
so that I can post the question in `public`.


## What?

Micro-comparison of `joi-browser` with "_standard_" `joi`.

### Hypothesis

If we give Joi an `undefined` value to validate it does _not_ return an error.

e.g:

```js
const schema = {
    a: Joi.number().required
};

const value = {
    a: '123'
};

const result = Joi.validate(value, schema);
console.log(result); // { error: null, value: { a: 123 }, then: [Function: then], catch: [Function: catch] }

// now try with value undefined:
let value_undefined;
const result_undefined_value = Joi.validate(value_undefined, schema);
console.log(result_undefined_value); // { error: null, value: undefined, then: [Function: then], catch: [Function: catch] }
```

Sample output: https://travis-ci.org/nelsonic/joi-browser-test/builds/301663402#L550-L559


## How?

### 1. Clone the Repo

```sh
git clone git@github.com:nelsonic/joi-browser-test.git && cd joi-browser-test
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Run the Test

```sh
npm test
```

## Sample Output of Test on Travis-CI

see: https://travis-ci.org/nelsonic/joi-browser-test/builds/301649502#L457

![no-error-for-undefined-object](https://user-images.githubusercontent.com/194400/32751880-2561619c-c8bf-11e7-970a-853fdb6cc940.png)


## Conclusion

If the data being validated by Joi (_or Joi Browser_) is `undefined`,
then no error will be thrown!!

So, check for `undefined` `before` you attempt to validate using Joi!!

Asked this question on: https://github.com/hapijs/joi/issues/1358
(_hoping for a reply from the knowledgable_)
