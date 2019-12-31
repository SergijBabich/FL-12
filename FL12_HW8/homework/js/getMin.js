function getMin(...args) {
  let max = Infinity ;
  for (let i = 0; i < args.length; i++) {
    if (args[i] <= max) {
      max = args[i];
    }
  }
  return max;
}
getMin(3,4,5,6,12,5,33,-1);
