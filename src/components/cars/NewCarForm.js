import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormGroupComp from "../UI/FormGroupComp";
import { storage } from "../../firebase/firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const NewCarForm = () => {
  const makeInput = useRef();
  const typeInput = useRef();
  const modelInput = useRef();
  const colorInput = useRef();
  const plateInput = useRef();
  const imageInput = useRef();

  const [fileSelected, setFileSelected] = useState(null);
  const [imagesList, setImagesList] = useState([]);
  
  useEffect(() => {
    const imagesListRef = ref(storage, "carImages/");
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) =>
        getDownloadURL(item).then((url) => {
          setImagesList((prevList) => [...prevList, url]);
        })
      );
    });
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");

    const storageRef = ref(storage, `carImages/ + ${fileSelected.name + v4()}`);
    uploadBytes(storageRef, fileSelected)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const onChangeHandler = (event) => {
    setFileSelected(event.target.files[0]);
    console.log(event.target.files[0]);
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
      {imagesList.map((imgUrl, index) => (
        <img key={index} src={imgUrl} alt={index} />
      ))}
    </Form>
  );
};

export default NewCarForm;
