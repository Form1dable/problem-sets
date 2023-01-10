function accum(s) {
	let strArr = [];

	for (let i = 0; i < s.length; i++) {
		let str = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);

		strArr.push(str);
	}

	return strArr.join("-");
}

accum("ZpglnRxqenU");
