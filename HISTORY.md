## 2015-08-29 ##
- Merged update from jhericks to address issue 8 dealing with large numbers.
- package version -> 2.1.0

## 2015-06-27 ##
- Modified main source file to no longer require the luhn object when requiring.  require("luhn") is all that's needed now.
- Updated source file to remove client-side concessions, recommending Browserify instead.
- Updated tests to adhere to the new interface.
- Updated package keywords to identify as browserify-compatible.
- Updated package to include "browser" property to tell browserify to use minified version.
- package version -> 2.0.0

## 2015-06-21 ##
- Cleaned up the module code slightly in preparation for v2.0 changes soon.
- package version -> 1.0.8

## 2015-03-02 ##
- Updated mocha and should references to latest versions (2.1.0 and 5.0.1 respectively)
- Removed Node 0.8 from TravisCI file.
- package version -> 1.0.7

## 2014-01-29 ##
- Merged in namespace-related pull request in order to make the package browserify compatible.
- package version -> 1.0.6

## 2012-08-07 ##
- Added client-install npm script to begin streamlining client-side install
- Added install and update npm scripts to provide a notification on how to install luhn for client-side use.
- package version -> 1.0.5

## 2012-07-02 ##
- Updated package to use `keywords` instead of `tags`
- package version -> 1.0.4