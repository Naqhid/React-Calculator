import PropTypes from 'prop-types';

function Button(props) {
  const { name, clickHandler } = props;

  const handleClick = e => {
    clickHandler(e.target.textContent);
  };
  return (
    <button className="button" type="submit" onClick={handleClick}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: null,
  clickHandler: null,
};

export default Button;
