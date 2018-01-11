import React from 'react';

class OpenTimes extends React.Component {
  render() {
    const open_at = new Date(this.props.openHours.open_at)
    const close_at = new Date(this.props.openHours.close_at)

    return (
      <div className="times">
        <p>
          Open at: <time className="opening_time">{open_at.getHours()}</time> <br/>
          Close at: <time className="closing_time">{close_at.getHours()}</time> <br/>
        </p>
      </div>
    )
  }
}

export default OpenTimes
