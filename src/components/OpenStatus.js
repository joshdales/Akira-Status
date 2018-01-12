import React from 'react';


function OpenStatus(props) {
  if (props.is_open) {
    return (
      <h2 className="open_for_business">The Doctor Is In</h2>
    )
  }

  if (!props.is_open) {
    return (
      <h2 className="closed_for_business">The Doctor Is Out Of The Office</h2>
    )
  }
}

export default OpenStatus;
