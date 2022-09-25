import { useContext, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import FormGroupComp from "../UI/FormGroupComp";
import useUpload from "../../hooks/use-upload";
import { CarsContext } from "../../store/CarsStore";

const NewCarForm = () => {
  const makeInput = useRef();
  const typeInput = useRef();
  const modelInput = useRef();
  const colorInput = useRef();
  const plateInput = useRef();
  const imageInput = useRef();

  const [fileSelected, setFileSelected] = useState(null);
  const { loading, currentError, startUpload } = useUpload();
  const carsCtx = useContext(CarsContext);
  // const [imagesList, setImagesList] = useState([]);

  // useEffect(() => {
  //   console.log("hellooo");
  //   const imagesListRef = ref(storage, "carImages/");
  //   listAll(imagesListRef).then((res) => {
  //     res.items.forEach((item) =>
  //       getDownloadURL(item).then((url) => {
  //         setImagesList((prevList) => [...prevList, url]);
  //       })
  //     );
  //   });
  // }, []);

  const addCarDetails = (imageUrl) => {
    const carDetails = {
      make: makeInput.current.value,
      type: typeInput.current.value,
      model: modelInput.current.value,
      plate: plateInput.current.value,
      color: colorInput.current.value,
      imageUrl,
      status: true,
    };
    carsCtx.addCar(carDetails);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
    const uploadDetails = {
      folderName: "cars",
      fileData: fileSelected,
    };
    startUpload(uploadDetails, addCarDetails);
  };

  const onChangeHandler = (event) => {
    setFileSelected(event.target.files[0]);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroupComp
        ctrlId="make"
        label="Make:"
        type="text"
        placeholder="(Toyota, Huynadi, ... )"
        refInput={makeInput}
      />
      <FormGroupComp
        ctrlId="type"
        label="Type:"
        type="text"
        placeholder="(Camry, Accent, ... )"
        refInput={typeInput}
      />
      <FormGroupComp
        ctrlId="model"
        label="Model:"
        type="text"
        placeholder="(2021, 2022, ... )"
        refInput={modelInput}
      />
      <FormGroupComp
        ctrlId="color"
        label="Color:"
        type="text"
        placeholder="(White, Black, ... )"
        refInput={colorInput}
      />
      <FormGroupComp
        ctrlId="plate"
        label="Plate:"
        type="number"
        placeholder="(1234, 5678, ... )"
        refInput={plateInput}
      />
      <FormGroupComp
        ctrlId="image"
        label="Photo:"
        type="file"
        refInput={imageInput}
        onSelect={onChangeHandler}
      />
      <Button className="mt-3" type="submit" variant="success">
        Add car
      </Button>
      {loading && <Alert variant="warning">Uploading...</Alert>}
      {currentError && <Alert variant="danger">{currentError}</Alert>}
    </Form>
  );
};

export default NewCarForm;
