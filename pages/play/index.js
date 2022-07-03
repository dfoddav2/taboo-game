import dynamic from "next/dynamic";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

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

  return (
    <section className={classes.container}>
      {!isPlaying && <button onClick={startHandler}>Start</button>}
      <div class={classes.button_container}>
        <div className={classes.button}>
          <div className={classes.icon}>
            <i className="fa fa-floppy-o"></i>
          </div>
        </div>
      </div>
      {isPlaying && <button onClick={stopHandler}>Stop</button>}
      <p>{`${scores["team1"]} | ${scores["team2"]}`}</p>
      {isPlaying && (
        <motion.div
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
          {isPlaying && <button onClick={nextHandler}>Next</button>}
          {isPlaying && <button onClick={missHandler}>Miss</button>}
        </div>
        <div className={classes.skip}>
          {isPlaying && <button onClick={skipHandler}>Skip</button>}
        </div>
      </div>
    </section>
  );
};

export default Play;
