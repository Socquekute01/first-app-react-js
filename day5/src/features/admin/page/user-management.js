import axios from "axios";
import { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsFillPencilFill, BsFillTrashFill, BsPlus } from "react-icons/bs";
import { AddUserModal } from "../../../components/common";

function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [filterUser, setFilterUser] = useState(users);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [filterValue, setFilterValue] = useState("");
  const [reload, setReload] = useState(true);
  const handleClose = () => setShow(false);

  const handleDelelteUser = async (id) => {
    try {
      const request = await axios.delete(`/user/${id}`);
      if (request.status === 200) {
        alert("Xóa thông tin thành công.");
        setReload(true);
      } else {
        alert("Xóa thông tin không thành công.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const handleFetchData = async () => {
      const request = await axios.get("/user");
      if (request.status === 200 && request.data.length) {
        const response = request.data;
        setUsers(response);
      }
    };
    if (reload) {
      handleFetchData();
      setReload(false);
    }
  }, [reload]);

  useEffect(() => {
    const filterData = users.filter(
      (user) =>
        user.id
          .toLowerCase()
          .trim()
          .includes(filterValue.toLowerCase().trim()) ||
        user.name
          .toLowerCase()
          .trim()
          .includes(filterValue.toLowerCase().trim()) ||
        user.email
          .toLowerCase()
          .trim()
          .includes(filterValue.toLowerCase().trim()) ||
        user.phone
          .toLowerCase()
          .trim()
          .includes(filterValue.toLowerCase().trim()) ||
        user.numberStudent
          .toLowerCase()
          .trim()
          .includes(filterValue.toLowerCase().trim()) ||
        user.role
          .toLowerCase()
          .trim()
          .includes(filterValue.toLowerCase().trim())
    );
    setFilterUser(filterData);
  }, [users, filterValue]);

  const RowTable = filterUser.map((item, index) => {
    const { id, name, numberStudent, phone, role, email } = item;
    return (
      <tr key={index}>
        <td>{id}</td>
        <td>{name}</td>
        <td style={{ color: "red" }}>{numberStudent}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td style={{ textTransform: "capitalize" }}>{role}</td>
        <td>
          <Button
            variant="warning"
            style={{ marginRight: "4px" }}
            onClick={() => {
              setShow(true);
              setSelectedUser(item);
            }}
          >
            <BsFillPencilFill />
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelelteUser(id);
            }}
          >
            <BsFillTrashFill />
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <AddUserModal
        show={show}
        handleClose={handleClose}
        setReload={setReload}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <div style={{ padding: "30px", width: "90%" }}>
        <h3>User Management</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "2% 0",
            justifyContent: "space-between",
          }}
        >
          <Form.Control
            type="text"
            id="filter"
            placeholder="Search User"
            name="filter"
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
            style={{ width: "40%" }}
          />
          <Button
            variant="primary"
            onClick={() => {
              setShow(true);
              setSelectedUser(null);
            }}
          >
            <BsPlus style={{ fontSize: "24px" }} />
          </Button>
        </div>
        {filterUser.length ? (
          <Table
            striped
            bordered
            hover
            style={{
              border: "3px solid green",
              width: "100%",
              height: "40%",
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Student Number</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{RowTable}</tbody>
          </Table>
        ) : (
          <h3>Không có user nào tại đây</h3>
        )}
      </div>
    </>
  );
}

export default UserManagementPage;
