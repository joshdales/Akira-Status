import React from 'react';

class OpenTimes extends React.Component {
  displayTime(time) {
    const hour = parseInt(time.getHours(), 0);
    const min = parseInt(time.getMinutes(), 0);
    const zeroMin = (min < 10 ? '0' : '') + min
    if (hour < 13) {
      return `${hour}:${zeroMin}AM`;
    } else {
      return `${hour - 12}:${zeroMin}PM`;
    };
  };

  render() {
    const open_at = new Date(this.props.openHours.open_at);
    const close_at = new Date(this.props.openHours.close_at);
    const {is_open} = this.props;

    return (
      <div className="times">
        <p className="todays-hours opening_time">
          {is_open ? 'Open' : 'Opening'} at: <time>{this.displayTime(open_at)}</time>
        </p>
        <p className="todays-hours closing_time">
          {is_open ? 'Closing' : 'Closed'} at: <time>{this.displayTime(close_at)}</time>
        </p>
      </div>
    );
  };
};

export default OpenTimes;
