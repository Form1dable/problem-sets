/* First and Last Position

Given a sorted array of integers arr and an integer target, find the first and last position of 
target in arr. If target can't be found in arr, return [-1, -1]
 */

let arr = [1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 5, 5, 6, 8, 8, 8, 9, 9, 10];
let target = 5;

// Linear Search implementation
function findTarget(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		// Traversing the array to find the first position
		if (arr[i] === target) {
			start = i;

			// Start traversing the array starting from the index of the first found position to the end
			// And checking if the next value of target is after start
			while (i + 1 < arr.length && arr[i + 1] === target) {
				// The loop ends if the last target is found or the next number is reached
				// Which is why this will only work with sorted array
				i += 1;
			}

			// Returns the value of i when the value is greater than the target
			return [start, i];
		}
	}

	return [-1, -1];
}
