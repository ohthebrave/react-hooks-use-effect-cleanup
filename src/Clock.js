import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //return a clean-up function
    return function cleanUp() {
      clearInterval(timerId);
    }

  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
