export default (crops=[], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return crops;
        case 'CREATE':
            return [...crops, action.payload];
        default:
            return crops;
    }
    
}