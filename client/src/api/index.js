import axios from 'axios';
const url='http://localhost:5000/crops';

export const fetchCrops = () => axios.get(url);
export const createCrop = (newCrop)=>axios.post(url, newCrop);
export const updateCrop =(id, updatedCrop)=>axios.patch(`${url}/${id}`,updatedCrop);
