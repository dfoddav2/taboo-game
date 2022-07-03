import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { gameActions } from "../../store";

import classes from "./Settings.module.css";

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.game.settings);

  const [timer, setTimer] = useState(settings.time);
  const timerChangeHandler = (event) => {
    dispatch(gameActions.setTimeSettings(event.target.value));
    setTimer(event.target.value);
  };

  const currentColor = useSelector((state) => state.game.settings.color);

  const onClickColorHandler = (event) => {
    switch (event.target.getAttribute("color")) {
      case "random":
        dispatch(gameActions.setColorSettings("random"));
        break;
      case "red":
        dispatch(gameActions.setColorSettings("red"));
        break;
      case "blue":
        dispatch(gameActions.setColorSettings("blue"));
        break;
      case "yellow":
        dispatch(gameActions.setColorSettings("yellow"));
        break;
      case "purple":
        dispatch(gameActions.setColorSettings("purple"));
        break;
      default:
        break;
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className={classes.container}>
      {/* <h2>Time</h2> */}
      <div className={classes.value}>{timer + " s"}</div>
      <input
        className={classes.range}
        onChange={timerChangeHandler}
        type="range"
        min="20"
        max="120"
        step="1"
        value={timer}
      ></input>
      {/* <h2>Color</h2> */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className={classes.color_container}
      >
        <motion.button
          variants={item}
          onClick={onClickColorHandler}
          color="purple"
          className={`${classes.color_item} ${classes.purple}`}
        >
          {currentColor === "purple" && "Tick"}
        </motion.button>
        <motion.button
          variants={item}
          onClick={onClickColorHandler}
          color="red"
          className={`${classes.color_item} ${classes.red}`}
        >
          {currentColor === "red" && "Tick"}
        </motion.button>
        <motion.button
          variants={item}
          onClick={onClickColorHandler}
          color="blue"
          className={`${classes.color_item} ${classes.blue}`}
        >
          {currentColor === "blue" && "Tick"}
        </motion.button>
        <motion.button
          variants={item}
          onClick={onClickColorHandler}
          color="yellow"
          className={`${classes.color_item} ${classes.yellow}`}
        >
          {currentColor === "yellow" && "Tick"}
        </motion.button>
        <motion.button
          variants={item}
          onClick={onClickColorHandler}
          color="random"
          className={`${classes.color_item} ${classes.random}`}
        >
          {currentColor === "random" ? "Tick" : "?"}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Settings;
