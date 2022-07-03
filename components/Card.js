import cards from "../data";

import classes from "./Card.module.css";

const Card = (props) => {
  const outerClasses = [classes.outer, classes[props.color]].join(" ");

  const padding = `${(1 / props.solution.length) * 14}em`

  const solutionStyle = {
    fontSize: "2.2em",
    padding: `0 ${padding} 0 ${padding}`,
    color: "white"
  };

  const getPadding = (padding) => {
    return `0 ${(1 / props.solution.length) * padding}em 0 ${(1 / props.solution.length) * padding}em`;
  }


  if (props.solution.length < 5) {
    solutionStyle.padding = getPadding(8);
    solutionStyle.fontSize = "2.5rem";
  } else if (props.solution.length <= 7) {
    solutionStyle.padding = getPadding(12);
    solutionStyle.fontSize = "2.2rem";
  } else if (props.solution.length < 9) {
    solutionStyle.padding = getPadding(15);
    solutionStyle.fontSize = "2.1rem";
  } else if (props.solution.length > 10) {
    solutionStyle.padding = getPadding(16);
    solutionStyle.fontSize = "1.8rem";
  }

  return (
    <div className={outerClasses}>
      <span
        // className={
        //   props.solution.length < 6
        //     ? classes.solution_short
        //     : props.solution.length > 10
        //     ? classes.solution_long
        //     : classes.solution
        // }
        className={classes.solution}
        style={solutionStyle}
      >
        {props.solution}
      </span>
      <div className={classes.inner}>
        {props.avoid.map((item) => (
          <p key={item} className={classes.avoid}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
