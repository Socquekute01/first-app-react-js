import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";
import axios from "axios";
import { UserInformationContext } from "../provider";
import { useNavigate } from "react-router-dom";

const defaultUserValue = {
  email: "",
  password: "",
};

function LoginModalComponent({ show = false, handleClose = () => {} }) {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(defaultUserValue);
  const userContext = useContext(UserInformationContext);

  const { setUserInformation } = userContext;

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
      alert("Đăng nhập thành công.");
      setUser(defaultUserValue);
      setUserInformation(result);
      if (result?.role === "admin") {
        navigate("/admin");
      }
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
          <Button type="submit">Login</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModalComponent;
