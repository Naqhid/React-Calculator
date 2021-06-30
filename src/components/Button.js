import PropTypes from 'prop-types';

function Button(props) {
  const { name, updateDisplay } = props;

  const callUpdateDisplay = e => {
    updateDisplay(e.target.textContent);
  };
  return (
    <button className="button" type="submit" onClick={callUpdateDisplay}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  updateDisplay: PropTypes.func,
};

Button.defaultProps = {
  name: null,
  updateDisplay: null,
};

export default Button;
