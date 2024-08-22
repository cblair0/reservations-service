import { Router, Request, Response } from 'express';
import { User } from '../../../types';
import { v4 as uuidv4 } from 'uuid';
import { users } from '../../../models/users';

const router = Router();

router.post('/user', (req: Request, res: Response) => {
    const user: User = {
        id: uuidv4(),
        name: req.body.name,
        isProvider: req.body.provider
    };
    users.push(user);
    res.status(201).json(user);
});

export default router;
