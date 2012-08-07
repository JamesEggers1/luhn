node-luhn [![Build Status](https://secure.travis-ci.org/JamesEggers1/node-luhn.png)](http://travis-ci.org/JamesEggers1/node-luhn)
=============

A JavaScript module of the luhn algorithm for Credit Card Validation that works with both client-side JavaScript and Node.js 

## Installation ##

    npm install luhn

## Testing ##

The luhn module has unit tests built around it than can be used to verify the package before usage.  The tests are written with the Mocha and Should modules and running the below command will import such.  

     npm test luhn

## Usage ##

Once the package has been installed using `npm`, using the module is very simple.  At the moment, the module includes an `luhn` object that exposes a single method, `validate`.  `validate` accepts a single string parameter that represents the credit card number.

#### Node.js ####

```javascript
var luhn = require("luhn").luhn;
var is_valid = luhn.validate("411111111111"); // should respond true.
```

## Using Luhn Client-Side ##
In addition to being usable as a Node.js module, the validator can also be used client-side in the user's web browser.  When you install `luhn` using `npm`, instructions will appear how to install it for client-side JavaScript consumption.

While you can copy the `luhn.js` file from the module's installation directory under `node_modles`, an automated script has been provided to assist you in this copy process and to make it more streamlined.  To do a client-side install, simply type the following `npm` command:

    npm run-script luhn client-install

Once you run that command, you'll be prompted to provide the path to which to install `luhn.js` for use by your client-side JavaScript.  At that point, you can reference the file in your html and JavaScript code as shown below.

#### Html ####

```html
<script type="text/javascript" src="path/to/luhn-min.js"></script>
```

#### JavaScript ####

```javascript
var luhn = luhn;
var is_valid = luhn.validate("411111111111"); // should respond true.
```

By default, the luhn module places itself into the global scope in the browser.  If you would prefer to NOT have it be directly attached to the `window` object, you can add your own `namespace` at the top of the luhn.js file.

## License (MIT) ##

Copyright (c) 2012 James Eggers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.