import React from 'react';

class SystemTime extends React.Component {
  constructor(){
    super();
    this.renderMinHand = this.renderMinHand.bind(this);
  };

  renderMinHand() {
    const min = this.props.time.getMinutes();
    const minDeg = ((min / 60) * 360) + 90;
    const divStyle = {transform: `rotate(${minDeg}deg)`};

    return <div className="hand hour-hand" style={divStyle}></div>;
  };

  render() {
    return (
      <div className="clock">
          {this.renderMinHand()}
      </div>
    );
  };
};

export default SystemTime;
