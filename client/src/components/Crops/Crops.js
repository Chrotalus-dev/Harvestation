import React from 'react';
import {useSelector} from 'react-redux';
import Crop from './Crop/Crop';
import useStyles from './styles';

const Crops =() => {
    const crops = useSelector((state)=>state.crops);
    const classes = useStyles();
    console.log (crops);
    return(
        <React.Fragment>
        <h1>CROPS</h1>
        <Crop />
        <Crop />
        </React.Fragment>
    );
}

export default Crops; 