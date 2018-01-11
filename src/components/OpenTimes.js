import React from 'react';

class OpenTimes extends React.Component {
  render() {
    return (
      <div className="times">
        <time className="opening_time">{this.props.openHours.open_at}</time>
        <time className="closing_time">{this.props.openHours.close_at}</time>
      </div>
    )
  }
}

export default OpenTimes
