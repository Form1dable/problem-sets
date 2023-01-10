// Number of 1 bits

/* Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight). */

let n = 00000000000000000000000000001011;

function hammingWeight(n) {
	let stringArr = String(n).split(""); // Need to convert this to binary string

	let bitCount = 0;

	for (let i = 0; i < stringArr.length; i++) {
		if (stringArr[i] === "1") bitCount++;
	}

	return bitCount;
}

console.log(hammingWeight(n));
