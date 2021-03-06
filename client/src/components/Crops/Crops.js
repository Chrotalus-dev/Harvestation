import React from 'react';
import { Grid} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Crop from './Crop/Crop';
import useStyles from './styles';

const Crops =({setCurrentId}) => {
    const crops = useSelector((state)=>state.crops);
    const classes = useStyles();
    
    return(
        
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {crops.map((crop)=>(
                
                <Grid key={crop._id} item xs={12} sm={6}>
                    <Crop crop={crop} setCurrentId={setCurrentId}/>
                </Grid>))}
            </Grid>
    
    );
}

export default Crops; 