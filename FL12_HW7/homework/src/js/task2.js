let moveToPlay = confirm('Do you want to play a game?', '');
let moveToPlayAgain = true;
let moveToPlayСontinue = true;
let min = 0;
let max = 8;
let askUserFirstGame;
let bank = 0;
let maxSummWin = 100;
let numberRandom;
let maxPize1 = 100;
let countForMaxWin = 100;
let countMaxWin = 100;
switch (true) {
	case moveToPlay === false:
		alert('You did not become a billionaire, but can.');
		moveToPlayСontinue = false;
		moveToPlayAgain = false;
		break;
	default:
		numberRandom = Math.floor(Math.random() * (max - min) + min);
		break;
}

while (moveToPlayСontinue === true && moveToPlayAgain === true) {

	for (let i = 1; i < 4; i++) {

		askUserFirstGame = +prompt(` Choose a roulette poket number from ${min} to ${max}
    Attempts left ${4-i}
    Total prize ${bank}$
    Possible prize on current attempt ${countForMaxWin}$`, '');
		if (i === 3 && numberRandom !== askUserFirstGame) {
			alert(`Thank you for your participation. Your prize is: ${bank} $`);
			moveToPlayAgain = confirm('he wants to play again?');
			if (moveToPlayAgain === true) {
				max = 8;
				maxSummWin = 100;
				countMaxWin = 200;
				countForMaxWin = countMaxWin;
				bank = 0;
			}
		}
		if (numberRandom !== askUserFirstGame) {
			countForMaxWin = countForMaxWin / 2;
		} else if (numberRandom === askUserFirstGame) {
			bank += countForMaxWin;
			alert(`Congratulation, you won!   Your prize is:  ${bank} $`);
			moveToPlayСontinue = confirm('he wants to continue?');
			if (moveToPlayСontinue === true) {
				max += 4;
				countMaxWin = countMaxWin * 2;
				countForMaxWin = countMaxWin;
				numberRandom = Math.floor(Math.random() * (max - min) + min);
			}
			break;
		}
	}
}
