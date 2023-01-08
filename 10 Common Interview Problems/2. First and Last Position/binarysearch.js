let arr = [1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 5, 5, 6, 8, 8, 8, 9, 9, 10];
let target = 5;

function findStart(arr, target) {
	// If the first element is the target, returns 0
	if (arr[0] === target) {
		return 0;
	}

	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		/* To find the first element, we need to make sure that mid is the target and 1 index before mid is smaller than the target 
		Because in a sorted array, all numbers before the first occurrence of the target will be less than the target
		*/

		// Specifying mid
		let mid = Math.round((left + right) / 2);

		// Checking if mid is the target and if it is, checking that the previous element is less than the target
		if (arr[mid] === target && arr[mid - 1] < target) {
			return mid;
		} else if (target > arr[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

function findEnd(arr, target) {
	// If the last element is the target, returning the last index
	if (arr.at(-1) === target) {
		return arr.length - 1;
	}

	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		/* To find the last element, we need to make sure that mid is the target and 1 index after mid is larger than the target 
		Because in a sorted array, all numbers after the last occurrence of the target will be less than the target
		*/
		let mid = Math.round((left + right) / 2);

		// Checking if mid is the target and all elements after mid is larger than the target
		if (arr[mid] === target && arr[mid + 1] > target) {
			return mid;
		} else if (target < arr[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return -1;
}

function findTarget(arr, target) {
	if (arr.length === 0 || arr[0] > target || arr.at(-1) < target)
		return [-1, -1];

	let start = findStart(arr, target);
	let end = findEnd(arr, target);

	return [start, end];
}

console.log(findTarget(arr, target));
