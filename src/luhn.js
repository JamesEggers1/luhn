"use strict";
module.exports = (function(){
	function validate(cardNumber){
		var trimmed = String(cardNumber).replace(/[\s]/g, "")
			, length = trimmed.length
			, odd = false
			, total = 0
			, calc
			, calc2;

			if (!/^[\d]+$/.test(trimmed)) {
				return false;
			}

			for (var i = length; i > 0; i--) {
				calc = parseInt(trimmed.charAt(i - 1));
				if (!odd) {
					total += calc;
				} else {
					calc2 = calc * 2;
					if (calc2 > 9) {
						calc2 -= 9;
					}
					total += calc2;
				}
				odd = !odd;
			}

			return total !== 0 && (total % 10) === 0;
		}

		return {
			validate: validate
		};
} ());
