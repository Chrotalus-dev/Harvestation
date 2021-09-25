import * as api from '../api';
import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionType'

export const getCrops = ()=> async(dispatch)=>{
    try {
        const {data} = await api.fetchCrops();

    dispatch({type:FETCH_ALL, payload:data});
        
    } catch (error) {
        console.log(error);
    }
    
}

export const createCrop = (crop) => async(dispatch)=> {
    try {
        const { data } = await api.createCrop(crop);
        dispatch ({type:CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updateCrop = (id,crop) => async(dispatch)=> {
    try {
        const {data} = await api.updateCrop(id,crop);
        dispatch ({type:UPDATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteCrop = (id) =>async (dispatch)=>{
    try {
        await api.deleteCrop(id);
        dispatch ({type:DELETE, payload:id});
    } catch (error) {
        console.log(error);
        
    }


}