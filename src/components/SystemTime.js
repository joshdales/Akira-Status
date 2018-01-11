import React from 'react';
import PropTypes from 'prop-types';

class SystemTime extends React.Component {
  static propTypes = {
    time: PropTypes.string.isRequired
  };

  render() {
    const { time } = this.props
    return (
      <time>{time.toLocaleTimeString('en-US')}</time>
    );
  };
};

export default SystemTime;
