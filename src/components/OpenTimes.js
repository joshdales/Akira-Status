import React from 'react';

class OpenTimes extends React.Component {
  render() {
    const open_at = new Date(this.props.openHours.open_at)
    const close_at = new Date(this.props.openHours.close_at)

    return (
      <div className="times">
        <p className="todays-hours opening_time">
          Open at: <time>{open_at.getHours()}</time>
        </p>
        <p className="todays-hours closing_time">
          Close at: <time>{close_at.getHours()}</time>
        </p>
      </div>
    )
  }
}

export default OpenTimes
