/* Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space. */

let numbers = [2, 7, 11, 15];

let target = 9;

function twoSum(arr, target) {
	let pointer_a = 0;
	let pointer_b = arr.length - 1;

	while (pointer_a <= pointer_b) {
		let sum = arr[pointer_a] + arr[pointer_b];

		if (sum > target) {
			pointer_b -= 1;
		} else if (sum < target) {
			pointer_a += 1;
		} else {
			return [pointer_a + 1, pointer_b + 1];
		}
	}

	return [-1, -1];
}

console.log(twoSum(numbers, target));
