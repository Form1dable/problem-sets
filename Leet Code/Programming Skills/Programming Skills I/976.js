/* Largest Perimeter Triangle */

/* 
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. 
If it is impossible to form any triangle of a non-zero area, return 0.
 */

/* Triangle restrictions
1. Any two side of a triangle should be greater than the length of the third side
2. The sum of all angles should be 180 degree.
*/

let nums = [1, 2, 1, 10];

function largestPerimeter(nums) {
	for (let i = 0; i <= nums.length - 1; i++) {
		console.log(nums[i]);
	}
}

largestPerimeter(nums);
