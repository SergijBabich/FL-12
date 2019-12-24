let a = prompt('Enter a ', '');
let b = prompt('Enter b ', '');
let c = prompt('Enter c ', '');
let two = 2;
let three = 3;
let four = 4;
let zero = 0;
if (a.replace(/\d/g, '').length || b.replace(/\d/g, '').length || c.replace(/\d/g, '').length) {
	console.log('Invalid input data');
} else {
	let dsc = Math.pow(b, two) - four * a * c;
	if (dsc < zero) {
		console.log('no solution');
	} else if (dsc === zero) {
		let x = -b / (two * a);
		console.log(x);
	} else if (dsc > zero) {
		let x1 = (-b + Math.sqrt(dsc)) / (two * a);
		let x2 = (-b - Math.sqrt(dsc)) / (two * a);
		console.log(`	x1 = ${x1.toFixed(three)} and x2 = ${x2.toFixed(three)}`);
	}
}
