import express from 'express';
import {getCrops,createCrop,updateCrop,deleteCrop} from '../controllers/crops.js';

const router = express.Router();
//http://localhost:5000/crops
router.get('/', getCrops);
router.post('/', createCrop);
router.patch('/:id', updateCrop)
router.delete('/:id', deleteCrop)

export default router;