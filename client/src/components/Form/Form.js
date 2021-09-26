import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Checkbox,
  Container,
} from "@material-ui/core";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import useStyles from "./styles";
import { createCrop, updateCrop } from "../../actions/crops";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

const Form = ({ currentId, setCurrentId }) => {
  const [cropData, setCropData] = useState({
    crop_name: "",
    description: "",
    creator: "",
    instructions: "",
    tags: "",
    selectedFile: "",
    startProject: false,
    startSeedsIndoorsby: new Date(),
    plantSeedlingsOutdoorsby: new Date(),
    Outdoors_by_Start_Seeds_Outdoors_by: new Date(),
    createdAt: new Date(),
    growing_days: 0,
    harvestDate: new Date(),
  });
  const crop = useSelector((state) =>
    currentId ? state.crops.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (crop) setCropData(crop);
  }, [crop]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateCrop(currentId, cropData));
    } else {
      dispatch(createCrop(cropData));
    }
    clear();
  };

  // const activate = (active) => {
  //   setCropData({
  //     startProject: !active,
  //   })
  // }

  const clear = () => {
    setCurrentId(null);
    setCropData({
      crop_name: "",
      description: "",
      creator: "",
      instructions: "",
      tags: "",
      selectedFile: "",
      startProject: false,
      startSeedsIndoorsby: new Date(),
      plantSeedlingsOutdoorsby: new Date(),
      Outdoors_by_Start_Seeds_Outdoors_by: new Date(),
      createdAt: new Date(),
      growing_days: 0,
      harvestDate: new Date(),
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}>
        <Typography varian="h6">
          {currentId ? "Editing" : "Creating"} a Crop
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={cropData.creator}
          onChange={(e) =>
            setCropData({ ...cropData, creator: e.target.value })
          }></TextField>
        <TextField
          name="crop_name"
          variant="outlined"
          label="Crop Name"
          fullWidth
          value={cropData.crop_name}
          onChange={(e) =>
            setCropData({ ...cropData, crop_name: e.target.value })
          }></TextField>
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={cropData.description}
          onChange={(e) =>
            setCropData({ ...cropData, description: e.target.value })
          }></TextField>
        <TextField
          name="instructions"
          variant="outlined"
          label="Instructions"
          fullWidth
          value={cropData.instructions}
          onChange={(e) =>
            setCropData({ ...cropData, instructions: e.target.value })
          }></TextField>
        <Checkbox
          label="Active Project?"
          name="activate_project"
          variant="outlined"
          label="Activate project?"
          value={cropData.startProject}
          checked = {cropData.startProject}
          onChange={() => {
            setCropData({ ...cropData, startProject: !cropData.startProject })
          }
        }
        />
        <Container className = {currentId ? classes.timestampsContainer : classes.timestampsContainerHide}>
          <div>
            <TextField label="Start Seeds Indoors by" variant="outlined"
              value={new Date(cropData.startSeedsIndoorsby).toDateString()}
              onChange={(e)=>setCropData({...cropData,startSeedsIndoorsby: e.target.value})}
              ></TextField>
            <br></br>
            <TextField label="Plant Seedlings Outdoor by" variant="outlined"
              value={new Date(cropData.plantSeedlingsOutdoorsby).toDateString()}
              readOnly></TextField>
            <br></br>
            <TextField label="Start Seeds Outdoors by" variant="outlined"
              value={new Date(cropData.Outdoors_by_Start_Seeds_Outdoors_by).toDateString()}
              readOnly></TextField>
            <br></br>
            <TextField label="Growing Days" variant="outlined" value={cropData.growing_days} readOnly></TextField>
            <br></br>
            <TextField label="Harvest Date" variant="outlined" value={new Date(cropData.harvestDate).toDateString()} readOnly></TextField>
          </div>
        </Container>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setCropData({ ...cropData, selectedFile: base64 })
            }></FileBase>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
