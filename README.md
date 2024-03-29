luhn [![Build Status](https://app.travis-ci.com/JamesEggers1/luhn.svg?branch=master)](https://app.travis-ci.com/JamesEggers1/luhn)
=============

A JavaScript module of the luhn algorithm

## Installation ##

    npm install luhn

## Testing ##

The luhn module has unit tests built around it than can be used to verify the package before usage.  The tests are written with the Mocha and Should modules and running the below command will import such.  

     npm test luhn

## Usage ##

Once the package has been installed using `npm`, using the module is very simple.  At the moment, the module includes an `luhn` object that exposes a single method, `validate`.  `validate` accepts a single string parameter that represents the credit card number.

#### Node.js ####

```javascript
import luhn from "luhn";
var is_valid = luhn("4111111111111111"); // should respond true.
```


## License (MIT) ##

Copyright (c) 2023 James Eggers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
