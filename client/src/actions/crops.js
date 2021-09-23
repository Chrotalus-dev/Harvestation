import * as api from '../api';

export const getCrops = ()=> async(dispatch)=>{
    try {
        const {data} = await api.fetchCrops();

    dispatch({type:'FETCH_ALL', payload:data});
        
    } catch (error) {
        console.log(error.message);
    }
    
}

export const createCrop = (crop) => async(dispatch)=> {
    try {
        const { data } = await api.createCrop(crop);
        dispatch ({type:'CREATE', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCrop = (id,crop) => async(dispatch)=> {
    try {
        const {data} = await api.updateCrop(id,crop);
        dispatch ({type:'UPDATE', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}