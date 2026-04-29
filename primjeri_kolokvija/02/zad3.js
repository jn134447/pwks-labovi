function suma(a) {
  let sum = 0;
  if (a == 0) {
    sum = 0;
  } else {
    sum += a;
  }
  return (inner = (b) => {
    if (b === undefined) {
      return sum;
    }
    if (b == 0) {
      sum = 0;
    } else {
      sum += b;
    }
    return inner;
  });
}

console.log(`${suma(1)(2)(20)(0)(4)(7)()} (11)`);
console.log(`${suma(1)(2)(0)(3)(8)(7)()} (18)`);
