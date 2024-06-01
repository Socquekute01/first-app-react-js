import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

const defaultUserValue = {
  email: "",
  password: "",
  phone: "",
  numberStudent: "",
  role: "user",
};

function RegisterModalComponent({ show = false, handleClose = () => {} }) {
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(defaultUserValue);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    try {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);

      const response = await axios.post(`http://localhost:9999/user`, user);
      if (response.status === 201) {
        alert("Đăng kí thành công.");
        setUser(defaultUserValue);
        handleClose();
      } else {
        alert("Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="name"
              placeholder="Enter name"
              required
              value={user.name}
              onChange={handleChangeInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
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

          <Form.Group className="mb-3" controlId="formGroupPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              type="phone"
              placeholder="Enter phone"
              required
              value={user.phone}
              onChange={handleChangeInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a phone.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupNumberStudent">
            <Form.Label>Number Student</Form.Label>
            <Form.Control
              name="numberStudent"
              type="numberStudent"
              placeholder="Enter Number Student"
              required
              value={user.numberStudent}
              onChange={handleChangeInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Number Student.
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

          <Button type="submit">Register</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterModalComponent;
