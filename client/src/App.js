import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch} from 'react-redux';

import {getCrops} from './actions/crops';
import cropbanner from "../src/images/sven-scheuermeier-4R1YpmGO52I-unsplash.jpg";
import Crops from './components/Crops/Crops';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
   
    useEffect(()=>{
      dispatch(getCrops());
    },[currentId,dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Harvestation
        </Typography>
        <img className={classes.image} src={cropbanner} alt="banner" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container 
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}>
            <Grid item xs={12} sm={7}>
                <Crops setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
