var namespace;
(function(ns){
	"use strict";
	ns.luhn = (function(){
		function validate(cardNumber){
			var trimmed = cardNumber.trim()
				, length = trimmed.length
				, iCCN = parseInt(trimmed, 10)
				, total = 0
				, calc
				, calc2;
				
				if (length === 0){
					return true;
				}

				if (isNaN(iCCN) || !/^[0-9]+$/.test(trimmed)) {
					return false;
				}
				
				for (var i = length; i > 0; i--) {
					calc = Math.floor(iCCN) % 10;
					total += calc;

					i--;

					iCCN = iCCN / 10;
					calc = Math.floor(iCCN) % 10;
					calc2 = calc * 2;

					switch (calc2) {
						case 10: calc2 = 1; break;
						case 12: calc2 = 3; break;
						case 14: calc2 = 5; break;
						case 16: calc2 = 7; break;
						case 18: calc2 = 9; break;
						default: calc2 = calc2;
					}
					iCCN = iCCN / 10;
					total += calc2;
				}

				return ((total % 10) === 0);
			}
		
			return {
				validate: validate
			};
	} ());
}((typeof window === "undefined") ? exports : namespace || window));