import { useSelector, useDispatch } from "react-redux";
import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

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
    <Fragment>
      <Head>
        <title>Settings</title>
        <script
          src="https://kit.fontawesome.com/85c9375648.js"
          crossorigin="anonymous"
        ></script>
      </Head>
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
            whileHover={{ scale: 1.1 }}
            variants={item}
            onClick={onClickColorHandler}
            color="purple"
            className={`${classes.color_item} ${classes.purple}`}
          >
            {currentColor === "purple" && (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <i class="fa-solid fa-check"></i>
              </motion.span>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            variants={item}
            onClick={onClickColorHandler}
            color="red"
            className={`${classes.color_item} ${classes.red}`}
          >
            {currentColor === "red" && (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <i class="fa-solid fa-check"></i>
              </motion.span>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            variants={item}
            onClick={onClickColorHandler}
            color="blue"
            className={`${classes.color_item} ${classes.blue}`}
          >
            {currentColor === "blue" && (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <i class="fa-solid fa-check"></i>
              </motion.span>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            variants={item}
            onClick={onClickColorHandler}
            color="yellow"
            className={`${classes.color_item} ${classes.yellow}`}
          >
            {currentColor === "yellow" && (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <i class="fa-solid fa-check"></i>
              </motion.span>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            variants={item}
            onClick={onClickColorHandler}
            color="random"
            className={`${classes.color_item} ${classes.random}`}
          >
            {currentColor === "random" ? (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <i class="fa-solid fa-check"></i>
              </motion.span>
            ) : (
              "?"
            )}
          </motion.button>
        </motion.div>
      </section>
    </Fragment>
  );
};

export default Settings;
