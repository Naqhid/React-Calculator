import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Button from './Button';

function ButtonPanel(props) {
  const { updateDisplay } = props;
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']];
  return (
    <div>
      {
          groups.map((group) => (
            <div className="calculator-group" key={nanoid()}>
              {
                  group.map((btn) => (
                    <Button name={btn} updateDisplay={updateDisplay} key={nanoid()} />
                  ))
              }
            </div>
          ))
      }
    </div>
  );
}

ButtonPanel.propTypes = {
  updateDisplay: PropTypes.func,
};

ButtonPanel.defaultProps = {
  updateDisplay: null,
};

export default ButtonPanel;
