import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteCrop } from "../../../actions/crops";

import useStyles from "./styles";

const Crop = ({ crop, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

    const confirmDelete = () => {
        let confirm = window.confirm("Are you sure that you would like to delete this crop?");

        if(confirm === true) {
          dispatch(deleteCrop(crop._id));
        }
    }
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={crop.selectedFile}
        title={crop.crop_name}
      />
      <div className={classes.overlay}>
        <Typography variant="body2">
          {moment(crop.createdAt).fromNow()}
        </Typography>
        <Typography variant="h5" className={classes.title}>
          {crop.crop_name}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(crop._id)}>
          <ModeEditIcon fontSize="medium" />
        </Button>
        <Button
          size="small"
          style={{ color: "white" }}
          onClick={() => confirmDelete()}>
          <DeleteIcon fontSize="small" />
        </Button>
      </div>

      <div className={classes.details}></div>
      <CardContent>
        <Typography
          className={classes.title}
          variant="body1"
          color="textSecondary"
          component="p"
          gutterBottom>
          {crop.description}
        </Typography>
        <Typography
          className={classes.title}
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom>
          {crop.instructions}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}></CardActions>
    </Card>
  );
};

export default Crop;
