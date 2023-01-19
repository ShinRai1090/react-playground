import "./Card.css";

function Card(cardProps) {
  const classes = "card " + cardProps.className;

  return <div className={classes}>{cardProps.children}</div>;
}

export default Card;
