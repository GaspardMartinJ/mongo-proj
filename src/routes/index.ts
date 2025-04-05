import express, { Request, Response } from 'express';
import signalementsRouter from './signalements';
import aboutRouter from './about';

const router = express.Router();

router.use('/signalements', signalementsRouter); 
router.use('/about', aboutRouter);
router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Express' });
});

export default router;