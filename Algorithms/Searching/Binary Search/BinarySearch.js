const arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 34, 56, 78, 90, 101, 145, 156];

let target = 13;

function timing(func) {
	let t0 = performance.now();
	func();
	let t1 = performance.now();

	console.log(`Total execution time: ${(t1 - t0).toFixed(5)}ms`);
}

function linearSearch(arr, target) {
	for (let [index, num] of arr.entries()) {
		if (num === target) {
			return index;
		}
	}

	return -1;
}

function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	// Loop will run until the left side reaches the right
	while (left <= right) {
		// Defining a mid point for the sorted array for comparison
		let mid = Math.round((left + right) / 2);

		// Checking if mid point is the target
		if (arr[mid] === target) {
			return mid;
		} else if (target < arr[mid]) {
			// If target is greater than mid, we shift the left side excluding the mid
			right = mid - 1;
		} else {
			// If target is smaller than mid, we shift the right side making it smaller than mid
			left = mid + 1;
		}
	}

	return -1;
}

console.log(binarySearch(arr, target));
