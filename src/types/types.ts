import uuid = require('uuid');

export interface User {
    id: string;
    name: string;
    isProvider?: boolean
}

export interface Reservation {
    id: string;
    providerId: string;
    userId: string | null;
    startTime: Date;
    endTime: Date;
    reserved: boolean;
    confirmed: boolean;
    reservationExp?: Date;
}