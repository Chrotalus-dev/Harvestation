import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const [cropData,setCropData]=useState({
      crop_name:'',description:'',creator:'',instructions:''
  });
  const classes = useStyles();
  const handleSubmit = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}>
        <Typography varian="h6">Creating a crop</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth  value={cropData.creator}onChange={(e)=>setCropData({...cropData, creator:e.target.value})}></TextField>
        <TextField name="crop_name" variant="outlined" label="Crop Name" fullWidth  value={cropData.crop_name}onChange={(e)=>setCropData({...cropData, crop_name:e.target.value})}></TextField>
        <TextField name="description" variant="outlined" label="Description" fullWidth  value={cropData.description}onChange={(e)=>setCropData({...cropData, description:e.target.value})}></TextField>
        <TextField name="instructions" variant="outlined" label="Instructions" fullWidth  value={cropData.instructions}onChange={(e)=>setCropData({...cropData, instructions:e.target.value})}></TextField>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>
  );
};

export default Form;
