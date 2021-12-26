import { Router, Request, Response } from 'express';
import limiter from '../middlewares/limiter';
const router = Router();

router.get('/', limiter, (req: Request, res: Response) => {
    res.json({
        version: '1.0',
        message: `Welcome to the application`
    });
});

export default router;