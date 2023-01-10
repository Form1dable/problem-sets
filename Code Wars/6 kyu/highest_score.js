/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

 */

/* SOLUTION 

- Find out to a way to rank the letter. (ASCII code 97-122)
- Sum the values
- Find maximum
*/

let str = "man i need a taxi up to ubud";
let test = "aaa abc bbb";

function high(x) {
	const words = x.split(" ");
	let highestSum = 0;
	let highestWord = "";

	for (let word of words) {
		let sum = 0;
		for (let char of word) {
			sum += char.charCodeAt(char) - 96;
		}

		if (sum > highestSum) {
			highestSum = sum;
			highestWord = word;
		}
	}

	return highestWord;
}

high(str);
