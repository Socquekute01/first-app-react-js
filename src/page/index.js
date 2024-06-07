import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function IndexPage() {
  const [departments, setDepartments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [radioValue, setRadioValue] = useState(0);
  const [cloneProjects, setCloneProjects] = useState([]);

  const handleChangeRadioValue = (value) => {
    const result = parseInt(value);
    setRadioValue(result);
  };

  useEffect(() => {
    let filterProjects = projects;
    if (radioValue) {
      filterProjects = projects.filter(
        (project) => project.department === radioValue
      );
    }
    setCloneProjects(filterProjects);
  }, [projects, radioValue]);
  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const [requestDepartments, requestProjects] = await Promise.all([
          axios.get("/departments"),
          axios.get("/projects"),
        ]);
        if (
          requestDepartments.status === 200 &&
          requestDepartments.data.length
        ) {
          const response = requestDepartments.data;
          setDepartments(response);
        }
        if (requestProjects.status === 200 && requestProjects.data.length) {
          const response = requestProjects.data;
          setProjects(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handleFetchData();
  }, []);
  return (
    <>
      <Row>
        <Col xs={3}>
          <Form>
            <h4>Departments</h4>
            <Form.Check
              label="All"
              name="group1"
              type="radio"
              id={`radio-0`}
              checked={radioValue === 0}
              onChange={() => handleChangeRadioValue(0)}
            />
            {departments.map((item, index) => (
              <Form.Check
                label={item?.name}
                name="group1"
                type="radio"
                id={`radio-${item.id}`}
                key={index}
                checked={radioValue === parseInt(item.id)}
                onChange={() => handleChangeRadioValue(item.id)}
              />
            ))}
          </Form>
        </Col>
        <Col xs={9}>
          <div>
            <Table striped>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>Type</th>
                  <th>Department</th>
                  <th>Function</th>
                </tr>
              </thead>
              <tbody>
                {cloneProjects.map((item, index) => {
                  const { id, name, description, startDate, type, department } =
                    item;
                  const departmentName = departments.find(
                    (item) => parseInt(item.id) === parseInt(department)
                  )?.name;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{description}</td>
                      <td>{startDate}</td>
                      <td>{type}</td>
                      <td>
                        <Link to={`/departments/${department}/employees`}>
                          {departmentName}
                        </Link>
                      </td>
                      <td>
                        <Link to={`/projects/edit/${id}`}>Edit</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default IndexPage;
