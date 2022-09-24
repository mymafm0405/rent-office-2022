import { Button, Col, Container, Row } from "react-bootstrap";
import CardComponent from "./components/UI/CardComponent";

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello Rent Office 2022</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardComponent
            src={require(`./assets/images/car.jpg`)}
            text={"This is a text"}
            title={"This is a title"}
          >
            <Button>This is a button</Button>
          </CardComponent>
        </Col>
        <Col>
          <CardComponent
            src={require(`./assets/images/car2.jpg`)}
            text={"This is a text"}
            title={"This is a title"}
          >
            <Button>This is a button</Button>
          </CardComponent>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
