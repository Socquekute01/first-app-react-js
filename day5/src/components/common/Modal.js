import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

const defaultUserValue = {
  email: "",
  password: "",
};

function ModalComponent({ show = false, handleClose = () => {} }) {
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(defaultUserValue);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    const response = await axios.get(
      `http://localhost:9999/user?email=${user.email}&password=${user.password}`
    );
    if (response.status === 200 && response.data.length) {
      const result = response.data[0];
      localStorage.setItem("user", JSON.stringify(result));
      alert("Đăng nhập thành công.");
      setUser(defaultUserValue);
      handleClose();
    } else {
      alert("Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại!");
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
              value={user.email}
              onChange={handleChangeInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
              value={user.password}
              onChange={handleChangeInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Login Account</Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ModalComponent;
