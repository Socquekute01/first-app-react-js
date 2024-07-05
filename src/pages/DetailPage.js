import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const [reload, setReload] = useState(true);

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const request = await axios.get(`/sectionManagement/${id}`);
        if (request.status === 200) {
          const response = request.data;
          setData(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    if (reload) {
      handleFetchData();
      setReload(false);
    }
  }, [reload]);
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <img src={data?.image} alt="section" style={{ width: "600px" }} />
        <Typography>Section Name: {data?.sectionName}</Typography>
        <Typography>Section Duration: {data?.duration}</Typography>
        <Typography>Is Main Task: {data?.isMainTask}</Typography>
        <Typography>Section Description: {data?.sectionDescription}</Typography>
      </Container>
    </>
  );
}

export default DetailPage;
