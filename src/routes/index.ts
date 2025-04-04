import express, { Request, Response } from 'express';
import signalementsRouter from './signalements';

const router = express.Router();

router.use('/signalements', signalementsRouter); 
router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Express' });
});

export default router;