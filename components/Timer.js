import { Fragment, useEffect, useState } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(props.time);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <p className={timer > 10 ? "timer" : "timer_danger"}>{timer}</p>
    </Fragment>
  );
};

export default Timer;
