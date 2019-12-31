function makeNumber(string) {
	let findNumber = '';
	for (let items in string) {
		if (parseInt(string[items])) {
			findNumber += string[items];
		}
	}
	return findNumber;
}

function countNumbers(makeNumber) {
	let newArr = makeNumber.split('').sort();
	let obj = {};
	newArr.forEach(item => {
		newArr[item] = parseInt(newArr[item])
	});
	newArr.forEach(a => {
		obj[a] !== undefined ? ++obj[a] : obj[a] = 1
	});
	console.log(obj);
}
countNumbers(makeNumber('111113334687676342413254365763111113333333555667777'));
