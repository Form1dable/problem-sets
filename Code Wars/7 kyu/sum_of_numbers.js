/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum(a, b) {
	if (a === b) return a;

	let range = b > a ? [a, b] : [b, a];

	let sum = 0;
	for (let i = range[0]; i <= range[1]; i++) {
		console.log(i);
		sum += i;
	}

	return sum;
}

getSum(0, -1);
