import axios from 'axios';
const url='http://localhost:5000/crops';

export const fetchCrops = () => axios.get(url);

