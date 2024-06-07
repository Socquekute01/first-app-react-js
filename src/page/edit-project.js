import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const defaultData = {
  name: "",
  description: "",
  startDate: "",
  type: "",
  department: "1",
};

function EditProjectPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [project, setProject] = useState(defaultData);
  const [departments, setDepartments] = useState([]);

  const handleChangeValue = (e) => {
    const { value, name } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      if (!project.name) {
        alert("Please enter the form fields that are required.");
        return;
      }
      const request = await axios.put(`/projects/${id}`, project);
      if (request.status === 200) {
        alert("Update success");
        navigate("/");
      } else {
        alert("Update failure");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (id) {
      const handleFetchData = async () => {
        try {
          const [requestDepartments, requestProjects] = await Promise.all([
            axios.get("/departments"),
            axios.get(`/projects?id=${id}`),
          ]);
          if (
            requestDepartments.status === 200 &&
            requestDepartments.data.length
          ) {
            const response = requestDepartments.data;
            setDepartments(response);
          }
          if (requestProjects.status === 200 && requestProjects.data.length) {
            const response = requestProjects.data[0];
            setProject(response);
          }
        } catch (e) {
          console.log(e);
        }
      };
      handleFetchData();
    }
  }, [id]);

  if (!id) return null;

  return (
    <>
      <Link to={"/"}>Home Page</Link>
      <Form style={{ marginTop: "2%" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            onChange={handleChangeValue}
            type="text"
            name="name"
            value={project?.name}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a project name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlTextarea2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleChangeValue}
            as="textarea"
            rows={3}
            name="description"
            value={project?.description}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlInput3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            onChange={handleChangeValue}
            type="date"
            name="startDate"
            value={project?.startDate}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlInput4">
          <Form.Label>Type</Form.Label>
          <Form.Control
            onChange={handleChangeValue}
            type="text"
            name="type"
            value={project?.type}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlInput5">
          <Form.Label>Department</Form.Label>
          <Form.Select
            name="department"
            onChange={handleChangeValue}
            value={project?.department}
          >
            {departments.map((item, index) => (
              <option key={index} value={item?.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit">Update</Button>
      </Form>
    </>
  );
}

export default EditProjectPage;
