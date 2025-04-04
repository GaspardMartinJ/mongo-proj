import express, { Request, Response, NextFunction } from 'express';
import usersRouter from './users';
import signalementsRouter from './signalements';
import aboutRouter from './about';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/signalements', signalementsRouter); 

router.use('/about', aboutRouter);
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', { title: 'Express' });
});

export default router;