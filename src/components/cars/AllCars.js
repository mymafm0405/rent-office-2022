import Car from "./Car";

const AllCars = (props) => {
    return <>
        {props.allCars.map((car, index) => <Car key={index} car={car} />)}
    </>
}

export default AllCars;