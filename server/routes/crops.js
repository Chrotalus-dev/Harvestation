import express from 'express';
import {getCrops,createCrop,updateCrop} from '../controllers/crops.js';

const router = express.Router();
//http://localhost:5000/crops
router.get('/', getCrops);
router.post('/', createCrop);
router.patch('/:id', updateCrop)

export default router;