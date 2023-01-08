/* Two Sum (Given array is sorted)

Given an array of integers that is already sorted in ascending order, find two numbers such that 
they add upto a specific target number.

Function will return two indices of numbers such that they up to the target where index 1 must be less than index 2.

You my assume that there is only one solution and you cannot use the same element twice
*/

let arr = [2, 3, 4, 6, 7, 11, 15];

let target = 6;

function bruteForce(arr, target) {
	for (let i = 0; i <= arr.length; i++) {
		for (let j = i + 1; j <= arr.length; j++) {
			// Comparing summation of both numbers with the target
			if (arr[i] + arr[j] === target) {
				return [i, j];
			}
		}
	}

	return [-1, -1];
}

function twoSum(arr, target) {
	// Create a new object from the array
	let map = Object.assign({}, arr);

	for (let i = 0; i <= arr.length; i++) {
		// Getting the difference to check if it exists in the object
		let difference = target - arr[i];

		// Check if value exists in the object
		if (Object.values(map).includes(difference)) {
			// Find the object key with the value
			let j = Number(
				Object.keys(map).find(
					(key) => map[key] === difference && key >= i
				)
			);
			return [i, j];
		}
	}

	return [-1, -1];
}

bruteForce(arr, target);
twoSum(arr, target);
