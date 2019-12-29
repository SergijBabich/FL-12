let userMail = 'user@gmail.com';
let adminMail = 'admin@gmail.com';
let userPass = 'UserPass';
let adminPass = 'AdminPass';
let chekPass;
let chekAnsChange;
let oldPass;
let newPass;
let newPassAgain;
const four = 4;
const five = 5;
let askMail = prompt('Enter your mail', '	');
switch (true) {
	case askMail.trim() === '' || askMail === null:
		alert('Canceled');
		break;
	case askMail.length <= four:
		alert(`don't know any emails having name length less than 5 symbols`);
		break;
	case askMail === userMail || askMail === adminMail:
		chekPass = prompt('Enter your password', '');
		break;
	default:
		alert('I don’t know you');
}
switch (true) {
	case chekPass === '' || askMail === null:
		alert('Canceled');
		break;
	case chekPass === userPass && userMail === askMail:
		chekAnsChange = confirm('Do you want to change your password?');
		break;
	case chekPass === adminPass && adminMail === askMail:
		chekAnsChange = confirm('Do you want to change your password?');
		break;
	default:
		alert('Wrong password');
}
switch (true) {
	case chekAnsChange === false:
		alert('You have failed the change');
		break;
	case chekAnsChange === true:
		oldPass = prompt('Enter your old password', '');
		break;
}
switch (true) {
	case oldPass !== chekPass:
		alert('Wrong password');
		break;
	case askMail === userMail && oldPass === userPass:
		newPass = prompt('Enter your new password', '');
		break;
	case askMail === adminMail && oldPass === adminPass:
		newPass = prompt('Enter your new password', '');
		break;
	case oldPass.trim() === '' || oldPass === null || oldPass === undefined:
		alert('Canceled');
}
switch (true) {
	case newPass === '' || newPass === null || newPass === false:
		alert('Canceled')
		break;
	case newPass.length <= five:
		alert('It’s too short password. Sorry');
		break;
	default:
		newPassAgain = prompt(' Enter your again', '');
}
switch (true) {
	case newPassAgain === newPass:
		alert('You have successfully changed your password.');
		break;
	case newPassAgain !== newPass && newPass.trim() !== '' && newPass.length > five:
		alert('You wrote the wrong password.');
		break;
}
