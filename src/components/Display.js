import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    return (
      <input className="display" type="text" value={total + operation + next} id="display" disabled />
    );
  }
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
