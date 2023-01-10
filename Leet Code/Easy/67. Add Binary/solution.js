/*  
Given two binary strings a and b, return their sum as a binary string.

Binary Addition rules

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 1 and carry 1

*/

let a = "1010";
let b = "10110101";

function addBinary(a, b) {
	return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}

addBinary(a, b);
