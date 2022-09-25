import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AllCars from "./components/cars/AllCars";
import NewCarForm from "./components/cars/NewCarForm";
import { CarsContext } from "./store/CarsStore";

const App = () => {
  const carsCtx = useContext(CarsContext);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello Rent Office 2022</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <NewCarForm />
        </Col>
      </Row>
      <Row>
        <Col><Button onClick={carsCtx.getAllCars}>Get all cars</Button></Col>
      </Row>
      <Row>
        <AllCars allCars={carsCtx.cars}/>
      </Row>
    </Container>
  );
};

export default App;
