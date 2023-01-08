// Average salary excluding minimum and maximum

let salary = [4000, 3000, 1000, 2000];

function average(salary) {
	let minimum = Math.min.apply(Math, salary);
	let maximum = Math.max.apply(Math, salary);
	let summation = 0;

	for (let i = 0; i < salary.length; i++) {
		summation += salary[i];
	}

	return (summation - (minimum + maximum)) / (salary.length - 2);
}

console.log(average(salary));
