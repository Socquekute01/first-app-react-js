import {
  Button,
  Container,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";
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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ModalSection from "../components/Modal";

function DashboardPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState([]);
  const [dataSelected, setDataSelected] = useState({});
  const navigate = useNavigate();

  const [reload, setReload] = useState(true);

  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm("Are you want to delete this?");
      if (confirm) {
        const request = await axios.delete(`/sectionManagement/${id}`);
        if (request.status === 200) {
          alert("Deleted successfully");
          setReload(true);
        } else {
          alert("Deleted failed");
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const request = await axios.get("/sectionManagement");
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
      <ModalSection
        open={open}
        handleClose={handleClose}
        setReload={setReload}
        dataSelected={dataSelected}
      />
      <Container sx={{ textAlign: "center" }}>
        <Button onClick={handleOpen} sx={{ mb: "2%" }} variant="contained">
          Add New Section
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Section Name</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Main Task</TableCell>
                <TableCell>Section Description</TableCell>
                <TableCell>Action</TableCell>
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
                  <TableCell component="td" scope="row">
                    <Switch checked={row?.isMainTask} readOnly />
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {row?.sectionDescription}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    <IconButton>
                      <EditIcon
                        onClick={() => {
                          handleOpen();
                          setDataSelected(row);
                        }}
                      />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(row.id)}>
                      <DeleteIcon />
                    </IconButton>
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

export default DashboardPage;
