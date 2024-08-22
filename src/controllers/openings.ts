import { Response } from 'express';
import { Reservation } from "../types";
import { users } from "../models/users";
import { reservations } from "../models/reservations";
import { v4 as uuidv4 } from 'uuid';

export const createOpening = (providerId: string, startTime: Date, endTime: Date, res: Response): Response => {

    return res.status(201).json([]);

};

