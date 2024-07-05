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

function HomePage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [reload, setReload] = useState(true);

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const request = await axios.get("/sectionManagement?isMainTask=true");
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Section Name</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row?.sectionName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="td" scope="row">
                    <Typography
                      onClick={() => navigate(`/detail/${row?.id}`)}
                      sx={{
                        cursor: "pointer",
                        color: "green",
                        textDecoration: "underline",
                      }}
                    >
                      {row?.sectionName}
                    </Typography>
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {row?.duration}
                  </TableCell>
                  <TableCell>
                    <img
                      src={row.image}
                      alt="section"
                      style={{ width: "200px" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default HomePage;
