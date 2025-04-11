import express, { Request, Response } from 'express';
import signalementsRouter from './signalements';
import aboutRouter from './about';
import environmentalRouter from './environmental';

const router = express.Router();

router.use('/signalements', signalementsRouter); 
router.use('/envir', environmentalRouter);
router.use('/about', aboutRouter);
router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Carte de signalements' });
});

export default router;