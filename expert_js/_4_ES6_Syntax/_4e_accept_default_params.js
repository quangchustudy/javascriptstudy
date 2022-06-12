/**
 * CASE 1: normal case
 * - Checkout: multiply(2,3) vs multiply(2) => NaN
 */
multiply = (a,b) => a*b;

/**
 * CASE 1: fix
 */
multiply2 = (a,b) => {
  a = a !== undefined ? a: 1;
  b = b !== undefined ? b: 1;
  return a*b;
}

/**
 * CASE 2: fix with default paras
 */
multiply2 = (a,b=1) => a * b;
