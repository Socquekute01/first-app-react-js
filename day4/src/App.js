import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Table from "react-bootstrap/Table";

function App() {
  //CRUD  create read update delete : get, post , delete, put call api with json live server and axios
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const request = await axios.get(`http://localhost:9999/company`);

        if (request) {
          setCompanies(request.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    handleFetchData();
  }, []);

  const RowTableData = companies.map((item, index) => {
    const { id, name, category, end } = item;
    return (
      <tr key={index}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{end}</td>
      </tr>
    );
  });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Category</th>
            <th>END</th>
          </tr>
        </thead>
        <tbody>{RowTableData}</tbody>
      </Table>
    </>
  );
}

// fetch axios

export default App;
