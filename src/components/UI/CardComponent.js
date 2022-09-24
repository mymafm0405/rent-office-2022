import { Card } from "react-bootstrap";
import classes from './CardComponent.module.css';

const CardComponent = (props) => {
  return (
    <Card>
      <Card.Img src={props.src} className={classes.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        {props.children}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
