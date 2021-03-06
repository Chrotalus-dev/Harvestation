export default (crops=[], action) =>{
    switch(action.type){
        case 'DELETE':
            return crops.filter((crop)=> crop._id !== action.payload);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...crops, action.payload];
        case 'UPDATE':
                return crops.map((crop)=>crop._id===action.payload._id ? action.payload: crop);
        default:
            return crops;
    }
    
}