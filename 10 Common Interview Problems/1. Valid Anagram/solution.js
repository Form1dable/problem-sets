/* 
Valid Anagram

Given two strings s1 and s2, check if they are anagrams.
Two strings are anagrams if they are made up of the same characters with the same frequencies.
*/

let s1 = "danger";
let s2 = "garden";

function isValidAnagram(s1, s2) {
	//  If the strings aren't the same length, it's impossible for them to be anagram.
	if (s1.length !== s2.length) {
		console.log("Not Anagram: Strings of different length.");
		return;
	}

	// Creating two objects to store count of character occurrences
	let freq1 = {};
	let freq2 = {};

	// Looping over string to get frequency count
	for (let char of s1) {
		if (char in freq1) {
			freq1[char] += 1;
		} else {
			freq1[char] = 1;
		}
	}

	// Looping over string to get frequency count
	for (let char of s2) {
		if (char in freq2) {
			freq2[char] += 1;
		} else {
			freq2[char] = 1;
		}
	}

	for (let key of Object.keys(freq1)) {
		// Check if key the key exists in both objects and if the value is same
		if (freq2.hasOwnProperty(key) === true || freq1[key] != freq2[key]) {
			// If key doesn't exist in both objects or if the value is different for the same key, return false

			console.log("Not Anagram: Letter mismatch");
			return false;
		}
	}

	console.log("Anagram");
}

isValidAnagram(s1, s2);
