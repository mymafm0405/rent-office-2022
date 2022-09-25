import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllCars from "./components/cars/AllCars";
import NewCarForm from "./components/cars/NewCarForm";
import Navigation from "./components/UI/Navigation";
import { CarsContext } from "./store/CarsStore";
import { Route } from "react-router-dom";

const App = () => {
  const carsCtx = useContext(CarsContext);
  const getCars = carsCtx.getAllCars;

  useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Rent Office 2022</h1>
          <img src="images/limousine_logo.png" alt="Limousine logo" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Route path="/" exact>
        <Row>
          <AllCars allCars={carsCtx.cars} />
        </Row>
      </Route>
      <Route path="/new-car" exact>
        <NewCarForm />
      </Route>
      {/* <Row className="mb-5">
        <Col>
          <NewCarForm />
        </Col>
      </Row> */}
      {/* <Row>
        <AllCars allCars={carsCtx.cars} />
      </Row> */}
    </Container>
  );
};

export default App;
