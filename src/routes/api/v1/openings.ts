import { Router, Request, Response } from 'express';

const router = Router();

router.post('/:providerId/opening', (req: Request, res: Response) => 
    //create openings logic
    res

export default router;
