import React from 'react';

const DateNow = () => {
  const myDate = new Date();
  return <p>
    The date is: {myDate.toDateString()}
  </p>
}

export default DateNow;
