/* 
A child is playing with a ball on the nth floor of a tall building. 
The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter. 
*/

/* SOLUTION Approach 

Problem Summary
- Ball drops from 4 meter above the ground
- Window is 1.5 meter above the ground
- Bounces 2/3 of height

Solution Condition
- Ball will be seen if it's bounce height is greater than 1.5 meter

Solution
- Find out the number of bounce
- Calculate the height of each bounce
- Count all bounce whose height is greater than then window height
*/

function bouncingBall(h, bounce, window) {
	if (h <= 0 || (bounce < 0 && bounce > 1) || window > h) {
		return -1;
	}

	let heightList = [];
	let height = h;

	for (let i = 0; i < h; i++) {
		let bounceHeight = (height * bounce).toFixed(3);
		heightList.push(bounceHeight);
		height = bounceHeight;
	}

	let successfulBounce = heightList.filter(
		(height) => height >= window
	).length;

	if (successfulBounce > 0) {
		return successfulBounce + 1;
	} else {
		return -1;
	}
}

bouncingBall(3.0, 0.66, 1.5);
