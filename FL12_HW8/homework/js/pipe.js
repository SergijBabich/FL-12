function pipe(y, ...args) {
 for (let i = 0; i < args.length; i++) {
    y = args[i](y);
  }
     return y;
}
function addOne(x) {
  return x + 1;
}
pipe(1, addOne); //=> 2
pipe(1, addOne, addOne, addOne, addOne); //=> 3
