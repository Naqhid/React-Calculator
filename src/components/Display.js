import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <input className="display" type="text" value={result} id="display" disabled />
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
