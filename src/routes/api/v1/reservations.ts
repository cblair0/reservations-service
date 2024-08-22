import { Router, Request, Response } from 'express';
import * as controllers from '../../../controllers/index';

const router = Router();

router.get('/available', (req: Request, res: Response) => 
    controllers.getAvailable(res));

router.get('/:userId/reservations', (req: Request, res: Response) => 
    controllers.getReservations(req.params.userId, res));

router.post('/:apptId/reserve', (req: Request, res: Response) => 
    controllers.reserve(req.params.appId, req.body.userId, res));

router.post('/:apptId/confirm', (req: Request, res: Response) => 
    controllers.confirm(req.params.apptId, req.body.userId, res));

// todo
// router.post('/:apptId/cancel', (req: Request, res: Response) => {
//     return controllers.cancel(req.params.apptId, req.body.userId, res)
// });

export default router;
