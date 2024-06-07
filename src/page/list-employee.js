import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function ListEmployeePage() {
  const params = useParams();
  const { id } = params;
  const [user, setUser] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [departmentName, setDepartmentName] = useState("");

  useEffect(() => {
    if (id) {
      const handleFetchData = async () => {
        try {
          const [requestDepartments, requestUser] = await Promise.all([
            axios.get("/departments"),
            axios.get(`/employees?department=${id}`),
          ]);
          if (
            requestDepartments.status === 200 &&
            requestDepartments.data.length
          ) {
            const response = requestDepartments.data;
            setDepartments(response);
          }
          if (requestUser.status === 200 && requestUser.data.length) {
            const response = requestUser.data;
            setUser(response);
          }
        } catch (e) {
          console.log(e);
        }
      };
      handleFetchData();
    }
  }, [id]);

  useEffect(() => {
    if (departments && departments.length)
      setDepartmentName(departments.find((item) => item.id === id)?.name);
  }, [departments, id]);

  if (!id) return null;

  return (
    <>
      <Link to={"/"}>Home Page</Link>
      <h4>{departmentName}</h4>
      {user.length ? (
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Employee Name</th>
              <th>Date of birth</th>
              <th>Gender</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              const { id, name, dob, gender, position } = item;

              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{dob}</td>
                  <td>{gender}</td>
                  <td>{position}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}

export default ListEmployeePage;
