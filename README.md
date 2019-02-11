# Vertical Addition

[![GitHub release](https://img.shields.io/github/release/haykam821/Vertical-Addition.svg?style=popout&label=github)](https://github.com/haykam821/Vertical-Addition/releases/latest)
[![npm](https://img.shields.io/npm/v/vertical-addition.svg?style=popout&colorB=red)](https://www.npmjs.com/package/vertical-addition)
[![Travis (.com)](https://img.shields.io/travis/com/haykam821/Vertical-Addition.svg?style=popout)](https://travis-ci.com/haykam821/Vertical-Addition)

This lightweight module allows you to position an addition problem into a layout for vertically adding.

## Installation

To start using this package, simply install from NPM:

    npm install vertical-addition --save


Afterwards, just require it and you can start using it:

```js
const vertAdd = require("vertical-addition");
```

## Documentation

This package exports a function for generating the vertical addition string. Here is its usage:

```js
vertAdd(addends, organize, lineCharacter);
```

### Parameters

The first parameter, `addends`, is an array of numbers, such as `[1, 2, 3]`, used in the problem. This is required.

The next parameter, `organize`, is a boolean defaulting to `true` that dictates whether higher numbers should be placed higher.

The final parameter, `lineCharacter`, is the character(s) to be used in the line separating the sum and the addends. This defaults to `—`. Note that it is not the dash which is `-`, letting it be a continuous line rather than a broken line.

### Output

The function will return something similar to this, assuming no parameters with defaults are being overrided and the addends are `[1, 2]`:

      2
    + 1
    ———
      3
