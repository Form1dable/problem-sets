// Subtract the Product and Sum of Digits of an Integer

/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

// Operator Implementation

// Array method implementations
function difference(n) {
	let numArr = String(n)
		.split("")
		.map((value) => Number(value));

	let sum = numArr.reduce((total, currentVal) => total + currentVal);
	let product = numArr.reduce((total, currentVal) => total * currentVal);

	return product - sum;
}

difference(234);
