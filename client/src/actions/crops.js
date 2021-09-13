import * as api from '../api';

export const getCrops = ()=> async(dispatch)=>{
    try {
        const {data} = await api.fetchCrops();

    dispatch({type:'FETCH_ALL', payload:data});
        
    } catch (error) {
        console.log(error.message);
    }
    
}

