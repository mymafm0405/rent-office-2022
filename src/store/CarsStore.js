import React, { useState } from "react";

export const CarsContext = React.createContext({
  cars: [],
  addCar: (newCar) => {},
  removeCar: (id) => {},
});

const CarsContextProvider = (props) => {
  const [currentCars, setCurrentCars] = useState([]);

  const addCarHandler = (newCar) => {
    setCurrentCars((prevCars) => prevCars.concat(newCar));
  };

  const removeCarHandler = (id) => {
    setCurrentCars((prevCars) => prevCars.filter((car) => car.id !== id));
  };

  const carsValue = {
    cars: currentCars,
    addCar: addCarHandler,
    removeCar: removeCarHandler,
  };
  return (
    <CarsContext.Provider value={carsValue}>
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
