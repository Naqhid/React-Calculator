import Big from 'big.js';

export function operate(total, next, operation) {
  const one = Big(total);
  const two = Big(next);
  if (operation === '+') return one.plus(two).toString();
  if (operation === '-') return one.minus(two).toString();
  if (operation === 'x') return one.times(two).toString();
  if (operation === '÷') {
    if (next.match(/^0[.]{0,1}[0]*$/)) return 'Error';
    return one.div(two).toString();
  }
  return null;
}

export default operate;
