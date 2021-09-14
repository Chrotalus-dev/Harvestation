import express from 'express';
import {getCrops,createCrops} from '../controllers/crops.js';

const router = express.Router();
//http://localhost:5000/crops
router.get('/', getCrops );
router.post('/', createCrops);

export default router;