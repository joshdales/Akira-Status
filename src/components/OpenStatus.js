import React from 'react';


function OpenStatus(props) {
  if (props.is_open) {
    return (
      <h2 className="open_for_business">We are open</h2>
    )
  }

  if (!props.is_open) {
    return (
      <h2 className="closed_for_business">We are closed</h2>
    )
  }
}

export default OpenStatus;
