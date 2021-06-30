import PropTypes from 'prop-types';

function Display(props) {
  const { total, operation, next } = props;
  return (
    <input className="display" type="text" value={total + operation + next} id="display" disabled />
  );
}

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  operation: '',
  next: '',
};

export default Display;
