import React from 'react';


function OpenStatus(props) {
  if (props.is_open) {
    return (
      <h2 className="open_for_business">The doctor is in</h2>
    )
  }

  if (!props.is_open) {
    return (
      <h2 className="closed_for_business">The doctor is out of office</h2>
    )
  }
}

export default OpenStatus;
