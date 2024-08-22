import { Router, Request, Response } from 'express';
import * as controllers from '../../../controllers/index';

const router = Router();

router.post('/:providerId/opening', (req: Request, res: Response) => {
    const providerId = req.params.providerId;
    const { startTime, endTime } = req.body;
    return controllers.createOpening(providerId, startTime, endTime, res)
});

export default router;
