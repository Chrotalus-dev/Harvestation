import React, {useState,useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import {createCrop, updateCrop} from '../../actions/crops';
import {useDispatch,useSelector} from 'react-redux';
import FileBase from 'react-file-base64';


const Form = ({currentId, setCurrentId}) => {
  const [cropData,setCropData]=useState({
      crop_name:'',description:'',creator:'',instructions:'',tags:'',selectedFile:''
  });
  const crop = useSelector((state)=>currentId? state.crops.find((p)=>p._id===currentId):null);
  const classes = useStyles();
  const dispatch= useDispatch();

  useEffect(()=>{
    if(crop) setCropData(crop);
    
  },[crop])

  const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
          dispatch(updateCrop(currentId, cropData));

        }
        else{
          dispatch(createCrop(cropData));
        }
        

  };
  const clear =()=>{
        

  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}>
        <Typography varian="h6">Creating a crop</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth  value={cropData.creator}onChange={(e)=>setCropData({...cropData, creator:e.target.value})}></TextField>
        <TextField name="crop_name" variant="outlined" label="Crop Name" fullWidth  value={cropData.crop_name}onChange={(e)=>setCropData({...cropData, crop_name:e.target.value})}></TextField>
        <TextField name="description" variant="outlined" label="Description" fullWidth  value={cropData.description}onChange={(e)=>setCropData({...cropData, description:e.target.value})}></TextField>
        <TextField name="instructions" variant="outlined" label="Instructions" fullWidth  value={cropData.instructions}onChange={(e)=>setCropData({...cropData, instructions:e.target.value})}></TextField>
        <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({base64})=>setCropData({...cropData, selectedFile: base64})} ></FileBase>
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
