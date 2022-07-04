import dynamic from "next/dynamic";
import { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Head from "next/head";

import { gameActions } from "../../store";

const Card = dynamic(() => import("../../components/Card"), { ssr: false });
import Timer from "../../components/Timer";

import classes from "./Play.module.css";
import cards from "../../data";

const Play = (props) => {
  const dispatch = useDispatch();
  const [cardDetails, setCardDetails] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingTeam, setPlayingTeam] = useState("team1");
  // const [timeOver, setTimeOver] = useState(true);
  // const [isGameOver, setIsGameOver] = useState(false);

  // Get scores from redux store
  const scores = useSelector((state) => state.game.scores);
  const settings = useSelector((state) => state.game.settings);

  // Getting the color is neccessary outside due to scope
  const colors = ["purple", "red", "blue", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const color = settings.color === "random" ? randomColor : settings.color;

  // Get random card from array of cards, get the color from it and then set the cardDetails state
  const getCardDetails = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    if (settings.color !== "random") {
      setCardDetails(randomCard[color]);
    } else {
      setCardDetails(randomCard[randomColor]);
    }
  };

  const startHandler = () => {
    getCardDetails();
    setPlayingTeam((prevState) => (prevState === "team1" ? "team2" : "team1"));
    setIsPlaying(true);

    // Stop timer when time is over
    setTimeout(() => {
      // setTimeOver(true);
      setIsPlaying(false);
    }, settings.time * 1000);
  };

  const skipHandler = () => {
    getCardDetails();
  };

  const nextHandler = () => {
    dispatch(gameActions.incrementScore(playingTeam));
    getCardDetails();
  };

  const missHandler = () => {
    dispatch(gameActions.decrementScore(playingTeam));
    getCardDetails();
  };

  const stopHandler = () => {
    // setTimeOver(true);
    setIsPlaying(false);
  };

  // Animations

  return (
    <Fragment>
      <Head>
        <title>Play</title>
      </Head>
      <section className={classes.container}>
        <p
          className={classes.score}
        >{`${scores["team1"]} | ${scores["team2"]}`}</p>
        {!isPlaying && (
          <button className="custom-btn btn-1" onClick={startHandler}>
            Start
          </button>
        )}

        {isPlaying && (
          <button className="custom-btn btn-1" onClick={stopHandler}>
            Stop
          </button>
        )}
        {isPlaying && (
          <motion.div
            animate={{ y: [40, 0], opacity: [0, 1] }}
            drag
            whileDrag={{ scale: 1.05 }}
            dragConstraints={{ left: 20, top: 20, right: 20, bottom: 20 }}
          >
            <Card
              color={color}
              solution={cardDetails.solution}
              avoid={cardDetails.avoid}
            />
          </motion.div>
        )}
        {isPlaying && <Timer time={settings.time} />}
        <div className={classes.actions_container}>
          <div className={classes.next_miss}>
            {isPlaying && (
              <motion.button
                animate={{ opacity: [0, 1] }}
                className="custom-btn btn-1"
                onClick={nextHandler}
              >
                Next
              </motion.button>
            )}
            {isPlaying && (
              <motion.button
                animate={{ opacity: [0, 1] }}
                className="custom-btn btn-1"
                onClick={missHandler}
              >
                Miss
              </motion.button>
            )}
          </div>
          <div className={classes.skip}>
            {isPlaying && (
              <motion.button
                animate={{ opacity: [0, 1] }}
                className="custom-btn btn-1"
                onClick={skipHandler}
              >
                Skip
              </motion.button>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Play;
