import { operate } from './operate';

export function calculate(calcData, buttonName) {
  let { total, operation, next } = calcData;
  if (total === 'Error') total = '0';
  if (buttonName === '=' && next !== '') {
    total = operate(total, next, operation);
    operation = '';
    next = '';
  } else if (buttonName === 'AC') {
    total = '0';
    operation = '';
    next = '';
  } else if (buttonName === '+/-') {
    if (operation === '') total = `${total * -1}`;
    else if (next !== '') next = `${next * -1}`;
  } else if (buttonName === '%') {
    if (operation === '') total = operate(total, '100', '÷');
    else if (next !== '') next = operate(next, '100', '÷');
  } else if (buttonName === '.') {
    if (operation === '') {
      if (total.match(/\./) === null) total = `${total}.0`;
    } else if (next === '') next = '0.0';
    else if (next.match(/\./) === null) next = `${next}.0`;
  } else if (buttonName.match(/[1-9]/) !== null) {
    if (operation === '') {
      if (total === '0' || total.match(/\.[0]+$/)) {
        total = total.slice(0, total.length - 1) + buttonName;
      } else total += buttonName;
    } else if (next === '' || next.match(/\.[0]+$/)) {
      next = next.slice(0, next.length - 1) + buttonName;
    } else next += buttonName;
  } else if (buttonName === '0') {
    if (operation === '' && total !== '0') {
      total += buttonName;
    } else if (next !== '0') {
      next += buttonName;
    }
  } else if (buttonName.match(/[-x+÷]/) && operation === '') {
    operation = buttonName;
  }
  return { total, operation, next };
}

export default calculate;
