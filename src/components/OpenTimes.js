import React from 'react';

class OpenTimes extends React.Component {
  displayTime(time) {
    const hour = parseInt(time.getHours(), 0);
    const min = parseInt(time.getMinutes(), 0);
    const zeroMin = (min < 10 ? '0' : '') + min
    if (hour < 13) {
      return `${hour}:${zeroMin}AM`
    } else {
      return `${hour - 12}:${zeroMin}PM`
    }
  }

  render() {
    const open_at = new Date(this.props.openHours.open_at);
    const close_at = new Date(this.props.openHours.close_at);

    return (
      <div className="times">
        <p className="todays-hours opening_time">
          Open at: <time>{this.displayTime(open_at)}</time>
        </p>
        <p className="todays-hours closing_time">
          Close at: <time>{this.displayTime(close_at)}</time>
        </p>
      </div>
    );
  };
};

export default OpenTimes;
