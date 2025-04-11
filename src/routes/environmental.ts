import express from 'express';
import { addEnvironmentalData, getEnvironmentalData } from '../controllers/environmentalController';

const router = express.Router();

router.get('/', getEnvironmentalData);
router.post('/', addEnvironmentalData);

export default router;