dgeni-sofadoc
=============

A dgeni package for generating documentation from sofadoc comments

## Installation

```sh
$ npm install --save-dev dgeni-sofadoc
```

## Usage

Extend your dgeni config with the sofadoc package:

```js

var sofadocPackage = require('dgeni-sofadoc');

module.exports = function (config) {

  config = sofadocPackage(config);

  // ...

  return config;
};
```
