import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";

import Card from "../components/Card";
import classes from "./index.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Taboo Home</title>
      </Head>
      <div className={classes.main_container}>
        <section className={classes.blue}>
          <motion.div
            animate={{ opacity: 1, x: "3em" }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            // drag
            // whileDrag={{ scale: 1.05 }}
            // dragConstraints={{ left: 20, top: 20, right: 20, bottom: 20 }}
            className={`${classes.cardHolder} ${classes.card1}`}
          >
            <Card
              className={classes.card}
              color="purple"
              solution={"Taboo"}
              avoid={["hello", "hello", "hello", "hello", "yeaaaa"]}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: "-2em" }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            // drag
            // whileDrag={{ scale: 1.05 }}
            // dragConstraints={{ left: 20, top: 20, right: 20, bottom: 20 }}
            className={`${classes.cardHolder} ${classes.card2}`}
          >
            <Card
              className={classes.card}
              color="red"
              solution={"Taboo"}
              avoid={["hello", "hello", "hello", "hello", "yeaaaa"]}
            />
          </motion.div>
        </section>
        <section className={classes.container}>
          <Link href="/play">
            <button class="custom-btn btn-1">Play</button>
          </Link>
          <Link href="/settings">
            <button class="custom-btn btn-1">Setting</button>
          </Link>
          <Link href="#">
            <button class="custom-btn btn-1">Rulebook</button>
          </Link>
        </section>
        <section className={classes.blue}>
          <motion.div
            animate={{ opacity: 1, x: "2em" }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            // drag
            // whileDrag={{ scale: 1.05 }}
            // dragConstraints={{ left: 20, top: 20, right: 20, bottom: 20 }}
            className={`${classes.cardHolder} ${classes.card3}`}
          >
            <Card
              className={classes.card}
              color="yellow"
              solution={"Taboo"}
              avoid={["hello", "hello", "hello", "hello", "yeaaaa"]}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: "-3em" }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            // drag
            // whileDrag={{ scale: 1.05 }}
            // dragConstraints={{ left: 20, top: 20, right: 20, bottom: 20 }}
            className={`${classes.cardHolder} ${classes.card4}`}
          >
            <Card
              className={classes.card}
              color="blue"
              solution={"Taboo"}
              avoid={["hello", "hello", "hello", "hello", "yeaaaa"]}
            />
          </motion.div>
        </section>
      </div>
    </Fragment>
  );
};

export default HomePage;
