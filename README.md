# joi-browser-test

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
