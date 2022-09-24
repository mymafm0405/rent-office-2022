import { Button, Col } from "react-bootstrap";
import CardComponent from "../UI/CardComponent";

const Car = (props) => {
  return (
    <Col xs={3}>
      <CardComponent
        title={props.car.plateNumber}
        src={`images/${props.car.imageName}`}
      >
        <p>{props.car.make}</p>
        <p>{props.car.type}</p>
        <p>{props.car.model}</p>
        <p>{props.car.color}</p>
        <Button
          variant={props.car.status ? "success" : "danger"}
          disabled={!props.car.status}
        >
          {props.car.status ? "Avaliable" : "Rented"}
        </Button>
      </CardComponent>
    </Col>
  );
};

export default Car;
