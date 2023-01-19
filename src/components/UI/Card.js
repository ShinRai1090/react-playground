import "./Card.css";

const Card = (cardProps) => {
  const classes = "card " + cardProps.className;

  return <div className={classes}>{cardProps.children}</div>;
}

export default Card;
