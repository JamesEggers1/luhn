(function(){
	"use strict";
	
	var SCRIPT_NAME = "luhn.js"
		, _fs = require("fs")
		, _path = require("path")
		, _readline = require("readline")
		, _prompt = _readline.createInterface({input:process.stdin, output:process.stdout})
		, _pathConfirmationCounter = 0
		, _destination;
		
	
	/**
	 * Prompts the user to key in a destination directory.
	 * @private
	 */
	var promptForDestination = function(){
		_prompt.question("Please enter the installation destination path.\n", function(path){
			_destination = path;
			confirmDestination();
		});
	};
	
	/**
	 * Prompts the user to confirm in a destination directory previously typed in.
	 * @private
	 */
	var confirmDestination = function(){
		_prompt.question("You entered '" + _destination + "'. Is this correct? (Y/N)\n", function(input){
			var response = input.trim().toLowerCase();
			evaluateConfirmation(response);
		});
	};
	
	/**
	 * Informs the user that their response was unknown and will reprompt if not encountered more than 3 times.
	 * @private
	 */
	var addressedUnknownConfirmationResponse = function(){
		console.log("Unknown Response");

		if (_pathConfirmationCounter < 3){
			console.log("Please enter a 'Y' or an 'N' when answering.\n");
			_pathConfirmationCounter++;
			confirmDestination();
		} else {
			console.log("Unable to install at this time due to too many unknown responses.\n");
			_prompt.close();
		}
	};
	
	/**
	 * Evaluates the user's response to the confirmation question.
	 * @private
	 */
	var evaluateConfirmation = function(response){
		switch(response){
			case "y":
				copyScriptToDestination();
				break;
			case "n":
				promptForDestination();
				break;
			default:
				addressedUnknownConfirmationResponse();
				break;
		}
	};
	
	/**
	 * Determines if the supplied directory is a relative or absolute path
	 * @private
	 */
	var destinationIsRelative = function(){
		return _destination.indexOf("/") === 0;
	};
	
	/**
	 * Copies the client-side script to the provided destination directory
	 * @private
	 */
	var copyScriptToDestination = function(){
		if (destinationIsRelative){
			_destination = _path.join(process.cwd(), "../..", _destination);
		}
		
		if(!_fs.existsSync(_destination)){
			_fs.mkdirSync(_destination);
		}
		
		var destinationPath = _path.join(_destination, "/" + SCRIPT_NAME);
		var sourcePath = _path.resolve(_path.dirname(module.filename), "../src/" + SCRIPT_NAME);
		var source = _fs.createReadStream(sourcePath);
		var dest = _fs.createWriteStream(destinationPath);
		dest.pipe(source);
		
		console.log("Client Installation Complete!\n");
		console.log(SCRIPT_NAME + " has been installed at: " + destinationPath);
		_prompt.close();
	};
	
	// run
	promptForDestination();
}());