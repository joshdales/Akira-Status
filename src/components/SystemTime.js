import React from 'react';

class SystemTime extends React.Component {
  render() {
    return (
      <time>{this.props.time}</time>
    )
  }
}

export default SystemTime;
