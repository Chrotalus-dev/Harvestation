import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Checkbox,
  Container  
} from "@material-ui/core";
import {alpha} from '@material-ui/core/styles'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
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
    todaysDate: new Date(),
  });
  const crop = useSelector((state) =>
    currentId ? state.crops.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  const [growingDaysValidated, setGrowingDaysValidated] = useState(true);

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

  // const isSameAsCurrentDate = (date) => {
  //   const cropDate = new Date(date);
  //   let sameDate = true;

  //   let today = new Date();

  //   if (cropDate.getMonth() !== today.getMonth()) {
  //     sameDate = false;
  //   } else if (cropDate.getDay() !== today.getDay()) {
  //     sameDate = false;
  //   } else if (cropDate.getFullYear() !== today.getFullYear()) {
  //     sameDate = false;
  //   }

  //   return sameDate;
  // };

  // const dateMatchNotification = (crop) => {
  //   let notificationMessage = `All Notifications for ${crop.crop_name}\n\n`;

  //   let messageCount = 0;

  //   if (isSameAsCurrentDate(crop.startSeedsIndoorsby)) {
  //     messageCount++;
  //     notificationMessage += `NOTIFICATION ${messageCount}: Today, the activity for ${crop.crop_name} is planting seeds indoors.\n\n`;
  //   }

  //   if (isSameAsCurrentDate(crop.plantSeedlingsOutdoorsby)) {
  //     messageCount++;
  //     notificationMessage += `NOTIFICATION ${messageCount}: Today, the activity for ${crop.crop_name} is planting seedlings outdoors.\n\n`;
  //   }

  //   if (isSameAsCurrentDate(crop.Outdoors_by_Start_Seeds_Outdoors_by)) {
  //     messageCount++;
  //     notificationMessage += `NOTIFICATION ${messageCount}: Today, the activity for ${crop.crop_name} is planting seeds outdoors.\n\n`;
  //   }

  //   if (isSameAsCurrentDate(crop.harvestDate)) {
  //     messageCount++;
  //     notificationMessage += `NOTIFICATION ${messageCount}: Today, the activity for ${crop.crop_name} is harvesting.\n\n`;
  //   }

  //   if (messageCount > 0) {
  //     window.alert(notificationMessage);
  //   }
  // };

  // useSelector((state) => {
  //   if (isSameAsCurrentDate(cropData.todaysDate)) {
  //     state.crops.forEach((crop) => {
  //       dateMatchNotification(crop);
  //     });
  //   }
  // });

  const validateGrowingDaysInput = (value) => {
    let validated = true;
    if (isNaN(value)) {
      validated = false;
    }
    setGrowingDaysValidated(validated);
    return validated;
  };

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
      todaysDate: new Date(),
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
          value={cropData.startProject}
          checked={cropData.startProject}
          onChange={() => {
            setCropData({ ...cropData, startProject: !cropData.startProject });
          }}
        />
        <Container
          className={
            currentId && cropData.startProject
              ? classes.timestampsContainer
              : classes.timestampsContainerHide
          }>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                format="MMMM dd, yyyy"
                label="Start Seeds Indoors by"
                variant="outlined"
                value={cropData.startSeedsIndoorsby}
                onChange={(e) => {
                  setCropData({ ...cropData, startSeedsIndoorsby: e });
                }}></DatePicker>
              <br></br>
              <DatePicker
                format="MMMM dd, yyyy"
                label="Plant Seedlings Outdoor by"
                variant="outlined"
                value={cropData.plantSeedlingsOutdoorsby}
                onChange={(e) => {
                  setCropData({ ...cropData, plantSeedlingsOutdoorsby: e });
                }}></DatePicker>
              <br></br>
              <DatePicker
                format="MMMM dd, yyyy"
                label="Start Seeds Outdoors by"
                variant="outlined"
                value={cropData.Outdoors_by_Start_Seeds_Outdoors_by}
                onChange={(e) => {
                  setCropData({
                    ...cropData,
                    Outdoors_by_Start_Seeds_Outdoors_by: e,
                  });
                }}></DatePicker>
              <br></br>
              <TextField
                label="Growing Days"
                variant="outlined"
                error= {!growingDaysValidated}
                helperText = {!growingDaysValidated ? 'Please enter a valid number' : ''}
                value={cropData.growing_days}
                onChange={(e) => {
                  if (validateGrowingDaysInput(e.target.value)) {
                    setCropData({
                      ...cropData,
                      growing_days: e.target.value,
                    });
                  }
                }}></TextField>
              <br></br>
              <DatePicker
                format="MMMM dd, yyyy"
                label="Harvest Date"
                variant="outlined"
                value={new Date(cropData.harvestDate).toDateString()}
                onChange={(e) => {
                  setCropData({
                    ...cropData,
                    harvestDate: e,
                  });
                }}></DatePicker>
            </MuiPickersUtilsProvider>
          </div>
        </Container>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              base64
                ? setCropData({ ...cropData, selectedFile: base64 })
                : "https://picsum.photos/200/300"
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
