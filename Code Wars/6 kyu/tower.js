/* Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
*/

function towerBuilder(nFloors) {
	let tower = [];
	for (let i = 1; i <= nFloors; i++) {
		let floor =
			" ".repeat(nFloors - i) +
			"*".repeat(2 * i - 1) +
			" ".repeat(nFloors - i);

		tower.push(floor);
	}

	return tower;
}

towerBuilder(6);
