import React from 'react';
import PropTypes from 'prop-types';

class SystemTime extends React.Component {
  static propTypes = {
    time: PropTypes.string.isRequired
  };

  render() {
    const { time } = this.props
    return (
      <div class="clock">
        <div class="clock-face">
          <div class="hand hour-hand"></div>
          <div class="hand min-hand"></div>
          <div class="hand second-hand"></div>
        </div>
      </div>
    );
  };
};

export default SystemTime;
