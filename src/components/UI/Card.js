import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // pega todos os classses
  return <div className={classes}>{props.children}</div>;
};

export default Card;
