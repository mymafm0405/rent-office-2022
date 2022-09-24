import { Col, Container, Row } from "react-bootstrap";
import AllCars from "./components/cars/AllCars";
import NewCarForm from "./components/cars/NewCarForm";

const App = () => {
  const myCars = [
    {
      make: 'Kia',
      type: 'Sportage',
      model: 2022,
      color: 'Black',
      plateNumber: 12345,
      imageName: 'car.jpg',
      status: false
    },
    {
      make: 'Kia',
      type: 'Sportage',
      model: 2022,
      color: 'White',
      plateNumber: 6789,
      imageName: 'car2.jpg',
      status: true
    }
  ]
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
        <AllCars allCars={myCars}/>
      </Row>
    </Container>
  );
};

export default App;
