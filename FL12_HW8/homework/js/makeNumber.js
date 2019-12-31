function makeNumber (string ) {

let findNumber = '';
for( let items in string) {
  if (parseInt(string[items])) {
    findNumber += string[items];
  }
}
 return findNumber;
}
makeNumber('fgw32423rf435r3421g3');
