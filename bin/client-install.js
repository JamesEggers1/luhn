(function(){
	"use strict";
	
	var _fs = require("fs")
		, _path = require("path")
		, _readline = require("readline")
		, _prompt = _readline.createInterface({input:process.stdin, output:process.stdout})
		, _pathConfirmationCounter = 0
		, _destination;
		
	
	var promptForDestination = function(){
		_prompt.question("Please enter the installation destination path.\n", function(path){
			_destination = path;
			confirmDestination();
		});
	};
	
	var confirmDestination = function(){
		_prompt.question("You entered '" + _destination + "'. Is this correct? (Y/N)\n", function(input){
			var response = input.trim().toLowerCase();
			evaluateConfirmation(response);
		});
	};
	
	var evaluateConfirmation = function(response){
		if (response === "y"){
			// set Destination and install
			copyScriptToDestination();
		} else if (response === "n") {
		 	promptForDestination();
		} else {
			console.log("Unknown Response");
			
			if (_pathConfirmationCounter < 3){
				console.log("Please enter a 'Y' or an 'N' when answering.\n");
				_pathConfirmationCounter++;
				confirmDestination();
			} else {
				console.log("Unable to install at this time due to too many unknown responses.\n");
				_prompt.close();
			}
		}
	};
	
	var copyScriptToDestination = function(){
		if(!_fs.existsSync(_destination)){
			_fs.mkdirSync(_destination);
		}
		
		var sourcePath = _path.resolve(_path.dirname(module.filename), "../src/luhn.js");
		var source = _fs.createReadStream(sourcePath);
		var dest = _fs.createWriteStream(_path.join(_destination, "/luhn.js"));
		dest.pipe(source);
		
		console.log("Client Installation Complete");
		_prompt.close();
	};
	
	
	promptForDestination();
}());