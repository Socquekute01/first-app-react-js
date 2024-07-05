import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const defaultValue = {
  sectionName: "",
  duration: 0,
  isMainTask: false,
  image: "",
  sectionDescription: "",
};
function ModalSection({ open, handleClose, setReload, dataSelected }) {
  const [data, setData] = useState(defaultValue);
  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    if (name === "isMainTask") setData({ ...data, [name]: !data?.isMainTask });
    else setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (dataSelected.id) {
      setData(dataSelected);
    }
  }, [dataSelected]);

  const handleCreate = async () => {
    try {
      const request = await axios.post(`/sectionManagement`, data);
      if (request.status === 201) {
        alert("Create successfully");
        handleClose();
        setData(defaultValue);
        setReload(true);
      } else {
        alert("Create failed");
      }
    } catch (e) {
      console.error(e); // nhớ check f12 để biết nếu bị lỗi
    }
  };

  const handleUpdate = async () => {
    try {
      const request = await axios.put(
        `/sectionManagement/${dataSelected?.id}`,
        data
      );
      if (request.status === 200) {
        alert("Thông tin muốn thông báo cho user biết");
        setReload(true)
      } else {
        alert("Cập nhật thất bại");
      }
    } catch (e) {
      console.error(e); // nhớ check f12 để biết nếu bị lỗi
    }
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h4" gutterBottom>
            {dataSelected.id ? "Update Section" : "Add New Section"}
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              error={data?.sectionName?.trim()?.split(" ")?.length < 3}
              label="Section name"
              helperText="Incorrect entry."
              sx={{ mb: "2%" }}
              name="sectionName"
              value={data?.sectionName}
              onChange={(e) => handleChangeValue(e)}
            />
            <TextField
              error={
                parseInt(data?.duration) > 60 || parseInt(data?.duration) < 0
              }
              label="Duration"
              type="number"
              helperText="Incorrect entry."
              sx={{ mb: "2%" }}
              name="duration"
              value={data?.duration}
              onChange={handleChangeValue}
            />

            <FormControlLabel
              control={
                <Switch
                  //   checked={data?.isMainTask}
                  value={data?.isMainTask}
                  onChange={handleChangeValue}
                  name="isMainTask"
                />
              }
              label="Is main task"
            />

            <TextField
              error={!data?.image.includes("https://")}
              label="Image"
              helperText="Incorrect entry."
              sx={{ mb: "2%" }}
              name="image"
              value={data?.image}
              onChange={handleChangeValue}
            />
            <TextField
              label="Section description"
              name="sectionDescription"
              value={data?.sectionDescription}
              onChange={handleChangeValue}
              sx={{ mb: "2%" }}
            />
          </Box>
          <Button
            variant="contained"
            onClick={dataSelected.id ? handleUpdate : handleCreate}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default ModalSection;
