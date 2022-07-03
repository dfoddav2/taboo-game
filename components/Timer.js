import { Fragment, useEffect, useState } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(props.time);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevState) => prevState - 0.5);
    }, 1000);
  }, []);

  console.log(timer);

  return (
    <Fragment>
      <p>{timer}</p>
    </Fragment>
  );
};

export default Timer;
