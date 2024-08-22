import { Response } from 'express';
import { reservations } from '../models/reservations';


export const getAvailable = (res: Response) => {
    //note: returns all unconfirmed openings that are 24h in the future and have not been reserved in the last 30 minutes
    const openings = reservations.filter(({ reserved, startTime, confirmed }) => 
        startTime >= new Date(Date.now() + 24 * 3600) &&
        (reserved && reserved <= new Date(Date.now() - 30 * 60 * 1000)) &&
        !confirmed
    );
    return res.status(200).json(openings);
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
    const reservation = reservations.find(appt => appt.id === apptId);
    //confirmed, less than 24h in the future, or has been reserved in the last 30 minutes
    if (
        !reservation || 
        reservation.confirmed || 
        reservation.startTime <= new Date(Date.now() + 24 * 3600) ||
        (reservation.reserved && reservation.reserved >= new Date (Date.now() - 30 * 60 * 1000))
        ) {
        return res.status(400).json({ error: 'reservation unavailable' });
    }
    reservation.userId = userId;
    reservation.reserved = new Date(Date.now());
    return res.status(200).json(reservation);
};

export const confirm = (apptId: string, userId: string, res: Response) => {
    const reservation = reservations.find(appt => appt.id === apptId);
    //reservation not reserved, reserved more than 30 minutes ago, or has been reserved by another user
    if (
        !reservation ||
        !reservation.reserved ||
        reservation.reserved <= new Date (Date.now() - 30 * 60 * 1000) ||
        reservation.userId != userId) {
        return res.status(404).json({ error: 'reservation unavailable for confirmation' });
    }
    reservation.confirmed = true;
    reservation.userId = userId;
    return res.status(200).json(reservation);
};

// export const cancel = (apptId: string, userId: string, res: Response): Response => {
// todo cancel reservation
// };