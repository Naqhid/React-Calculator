import { nanoid } from 'nanoid';
import Button from './Button';

const groups = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']];

function ButtonPanel() {
  return (
    <div>
      {
          groups.map(group => (
            <div className="calculator-group" key={nanoid()}>
              {
                  group.map(btn => (
                    <Button name={btn} key={nanoid()} />
                  ))
              }
            </div>
          ))
      }
    </div>
  );
}
export default ButtonPanel;
