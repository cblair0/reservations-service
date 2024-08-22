import { Router, Request, Response } from 'express';

const router = Router();

router.get('/openings', (req: Request, res: Response) => 
    // openings logic
    res

router.get('/:userId/reservations', (req: Request, res: Response) => 
    // reservations logic
    res

router.post('/:apptId/reserve', (req: Request, res: Response) => 
    // reserve logic
    res

router.post('/:apptId/confirm', (req: Request, res: Response) => 
    // confirm logic
    res

export default router;
