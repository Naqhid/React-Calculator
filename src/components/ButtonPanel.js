import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']];

  const handleClick = nButton => {
    clickHandler(nButton);
  };

  return (
    <div>
      {
          groups.map(group => (
            <div className="calculator-group" key={nanoid()}>
              {
                  group.map(btn => (
                    <Button name={btn} clickHandler={handleClick} key={nanoid()} />
                  ))
              }
            </div>
          ))
      }
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;


// update methods names

