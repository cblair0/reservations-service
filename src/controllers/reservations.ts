import { Response } from 'express';
import { reservations } from '../models/reservations';
//todo move model logic to ./services
//todo add validation for multiple reservations at the same time by a user
//todo improve error messages for different cases (decorator?)

export const getAvailable = (res: Response) => {
    //note: returns all unconfirmed openings that are 24h in the future and have not been reserved in the last 30 minutes
    return res.status(200).json([]);
};

export const getReservations = ( userId: string ,res: Response) => {
    const openings = reservations.filter(({ userId, startTime, confirmed }) => 
        startTime >= new Date(Date.now()) &&
        userId === userId &&
        confirmed
    );
    return res.status(200).json(openings);
};

export const reserve = (apptId: string, userId: string, res: Response) => {

    return res.status(200).json([]);
};

export const confirm = (apptId: string, userId: string, res: Response) => {

    return res.status(200).json([]);
};