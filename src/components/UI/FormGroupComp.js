import { Form } from "react-bootstrap";

const FormGroupComp = ({
  ctrlId,
  label,
  type,
  placeholder,
  refInput,
  onSelect,
}) => {
  const onChangeHandler = (event) => {
    onSelect(event);
  };
  return (
    <Form.Group controlId={ctrlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        ref={refInput}
        onChange={type === 'file' ? onChangeHandler : () => {}}
      />
    </Form.Group>
  );
};

export default FormGroupComp;
