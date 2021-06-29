import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <button className="button" type="submit">{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: null,
};

export default Button;
