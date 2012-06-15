test:
	@npm install mocha
	@npm install should
	@node_modules/mocha/bin/mocha tests/luhn-tests.js -R spec

.PHONY: test