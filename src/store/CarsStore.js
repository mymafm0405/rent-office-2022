import React, { useCallback, useState } from "react";
import useHttp from "../hooks/use-http";

export const CarsContext = React.createContext({
  cars: [],
  addCar: (newCar) => {},
  removeCar: (id) => {},
  getAllCars: () => {}
});

const CarsContextProvider = (props) => {
  const [currentCars, setCurrentCars] = useState([]);
  const {sendPostRequest, getRequest, carId} = useHttp();

  const addCarHandler = (newCar) => {
    const requestDetails = {
      url: "https://rentoffice2022-e097d-default-rtdb.firebaseio.com/cars.json",
      body: newCar,
    };
    sendPostRequest(
      requestDetails,
      setCurrentCars((prevCars) => [...prevCars, {...newCar, id: carId}])
    );
  };

  const removeCarHandler = (id) => {
    setCurrentCars((prevCars) => prevCars.filter((car) => car.id !== id));
  };

  const getAllCarsHandler = useCallback(() => {
    const requestDetails = {
      url: "https://rentoffice2022-e097d-default-rtdb.firebaseio.com/cars.json"
    };

    getRequest(requestDetails, convertResData)
  }, [getRequest])

  const convertResData = (res) => {
    const loadedCars = [];
    for (const key in res.data) {
      loadedCars.push({id: key, ...res.data[key]})
    }
    console.log(loadedCars)
    setCurrentCars(loadedCars)
  }

  const carsValue = {
    cars: currentCars,
    addCar: addCarHandler,
    removeCar: removeCarHandler,
    getAllCars: getAllCarsHandler
  };
  return (
    <CarsContext.Provider value={carsValue}>
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
