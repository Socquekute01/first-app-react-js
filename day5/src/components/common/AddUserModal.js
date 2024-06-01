import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const defaultUserInformation = {
  id: "",
  name: "",
  email: "",
  password: "",
  phone: "",
  numberStudent: "",
  role: "user",
};

function AddUserModal({
  show,
  handleClose,
  setReload,
  selectedUser,
  setSelectedUser,
}) {
  const [userInformation, setUserInformation] = useState(
    selectedUser ? selectedUser : defaultUserInformation
  );

  useEffect(() => {
    setUserInformation(selectedUser ? selectedUser : defaultUserInformation);
  }, [selectedUser]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      event.stopPropagation();

      const payload = { ...userInformation };

      if (selectedUser) {
        const response = await axios.put(
          `http://localhost:9999/user/${payload.id}`,
          payload
        );
        if (response.status === 200) {
          alert("Chỉnh sửa thông tin thành công.");
          setUserInformation(defaultUserInformation);
          handleClose();
          setReload(true);
        } else {
          alert("Chỉnh sửa thông tin không thành công.");
        }
      } else {
        delete payload.id;
        const response = await axios.post(
          `http://localhost:9999/user`,
          payload
        );
        if (response.status === 201) {
          alert("Tạo người dùng thành công.");
          setUserInformation(defaultUserInformation);
          handleClose();
          setReload(true);
        } else {
          alert("Tạo người dùng không thành công.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedUser ? "Edit User" : "Create New User"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form.Label>Id</Form.Label>
        <Form.Control
        style={{marginBottom: '2%'}}
          value={userInformation.id}
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              id: e.target.value,
            });
          }}
        /> */}
        <Form.Label>Name</Form.Label>
        <Form.Control
          style={{ marginBottom: "2%" }}
          value={userInformation.name}
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              name: e.target.value,
            });
          }}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          style={{ marginBottom: "2%" }}
          value={userInformation.email}
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              email: e.target.value,
            });
          }}
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          style={{ marginBottom: "2%" }}
          value={userInformation.password}
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              password: e.target.value,
            });
          }}
        />
        <Form.Label>Phone</Form.Label>
        <Form.Control
          style={{ marginBottom: "2%" }}
          value={userInformation.phone}
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              phone: e.target.value,
            });
          }}
        />
        <Form.Label>Student Number</Form.Label>
        <Form.Control
          style={{ marginBottom: "2%" }}
          value={userInformation.numberStudent}
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              numberStudent: e.target.value,
            });
          }}
        />
        <Form.Label>Role</Form.Label>
        <Form.Select
          aria-label="User"
          value={userInformation.role}
          onChange={(e) => {
            setUserInformation({
              ...userInformation,
              role: e.target.value,
            });
          }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddUserModal;
