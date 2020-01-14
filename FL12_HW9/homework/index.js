let arr = ['1', 2, 3, '4'];

function convert(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		typeof arr[i] === 'string' ? newArr.push(Number(arr[i])) : newArr.push(String(arr[i]));
	}
  console.log(newArr);
}
convert(arr);

/* 2 */

function executeforEach(arr, el) {
	for (let i of arr) {
		el(i)
	}
}


/* 3  Done*/

function mapArray(arr) {
	let rezult = [];
	executeforEach(arr, i => {
		Number(i);
		if (!isNaN(parseInt(i))) {
			rezult.push(parseInt(i + 3))
		}
	})
  console.log(rezult);
}
mapArray([2, '5', 8]);


/* 4 */

function filterArray(arr) {
	let newArr = [];
	executeforEach(arr, i => {
		if (i % 2 === 0) {
			newArr.push(i);
		}
	})
	return newArr;
}
filterArray([1, 2, 3, 4, 8]);

/*5*/

function flipOver(str) {
	let newSentense = '';
	for (let i = str.length - 1; i >= 0; i--) {
		newSentense += str[i];
	}
	console.log(newSentense);
}
flipOver('hey world');

/* 6 */

function makeListFromRange(arr) {
	let newArr = [];
	for (let i = arr[0]; i <= arr[1]; i++) {
		newArr[i] = i;
	}
	return newArr;
}
makeListFromRange([2, 11]);

/* 7 DONE */

const actors = [{
		name: 'tommy',
		age: 36
	},
	{
		name: 'lee',
		age: 28
	}
];
//console.log(Object.keys(actors[0]));
function getArrayOfKeys(obj) {

	let newArr = [];
	executeforEach(obj, i => {
		newArr.push(i.name);
		return newArr;
	})
}
getArrayOfKeys(actors, 'name');


/* 8 DONE */

function substitute(arr) {
	let rezult = [];
	executeforEach(arr, el => {
		el < 30 ? rezult.push('*') : rezult.push(el);
	})
	return rezult;
}
substitute([58, 14, 48, 2, 31, 29]);


/* 9  DONE*/

const date = new Date(2019, 0, 2);

function getPastDay(date, count) {
	let newDate = new Date(date);
	newDate.setDate(newDate.getDate() - count);
	return newDate;
}

getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)


/* 10 */

function formatDate(date) {
	const MAX_COUNT = 10;
	let Hours = date.getHours() < MAX_COUNT ? '0' + date.getHours() : date.getHours();
	let rezult = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${Hours}:${date.getMinutes()}`;
	return rezult;
}
formatDate(new Date('6/15/2018 09:15:00')) // "2018/6/15 09:15"
formatDate(new Date()) // "2020/1/7 12:56" // gets current local time
