import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormGroupComp from "../UI/FormGroupComp";

const NewCarForm = () => {
  const makeInput = useRef();
  const typeInput = useRef();
  const modelInput = useRef();
  const colorInput = useRef();
  const plateInput = useRef();
  const imageInput = useRef();

  const [fileSelected, setFileSelected] = useState(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");

    const formData = new FormData();
    formData.append("name", "Mahmoud");
    formData.append("file", fileSelected);
    // fetch('images', {method: 'POST', headers: {'Content-Type': 'multipart/form-data'}, body: formData})
    axios
      .post("https://v2.convertapi.com/upload", formData)
      .then((res) => {
        console.log(res);
        console.log("Uploaded");
      })
      .catch((error) => console.log(error));
    console.log(imageInput.current.value);
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
    </Form>
  );
};

export default NewCarForm;
