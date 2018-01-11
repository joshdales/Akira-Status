import React from 'react';
import PropTypes from 'prop-types';

class SystemTime extends React.Component {
  static propTypes = {
    time: PropTypes.string.isRequired
  };

  render() {
    return (
      <time>{this.props.time}</time>
    );
  };
};

export default SystemTime;
