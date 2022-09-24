import { Card } from "react-bootstrap";

const CardComponent = (props) => {
  return (
    <Card>
      <Card.Img src={`${props.src}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        {props.children}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
