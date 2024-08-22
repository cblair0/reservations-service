import { Response } from 'express';
import { Reservation } from "../types";
import { users } from "../models/users";
import { reservations } from "../models/reservations";
import { v4 as uuidv4 } from 'uuid';

export const createOpening = (providerId: string, startTime: Date, endTime: Date, res: Response): Response => {

    const provider = users.find(user => user.id === providerId);

    if(!provider?.isProvider){
        return res.status(400).json({ error: 'must be a provider' });
    }
    const providerOpenings = []

    const opening: Reservation = {
        id: uuidv4(),
        providerId: provider.id,
        userId: null,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        reserved: null,
        confirmed: false
    };

    providerOpenings.push(opening);
    reservations.push(opening);
    return res.status(201).json(providerOpenings);

};

