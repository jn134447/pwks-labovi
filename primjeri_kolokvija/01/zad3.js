// zbraja parne oduzima neparne
// arrow func inside
function suma_parnih(a) {
  sum = 0;
  if (a % 2 == 0) {
    sum += a;
  } else {
    sum -= a;
  }

  return (inner = (b) => {
    if (b === undefined) {
      return sum;
    } else {
      if (b % 2 == 0) {
        sum += b;
      } else {
        sum -= b;
      }
    }
    return inner;
  });
}

console.log(`${suma_parnih(1)(2)(20)(35)(4)(7)()} (-17)`); 
console.log(`${suma_parnih(1)(2)(2)(3)(8)(7)()} (1)`); 
