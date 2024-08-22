import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import schedulesV1 from './src/routes/api/v1/openings';
import appointmentsV1 from './src/routes/api/v1/reservations';
import userV1 from './src/routes/api/v1/users';

app.use(bodyParser.json());
app.use('/api/v1/schedules', schedulesV1);
app.use('/api/v1/appointments', appointmentsV1);
app.use('/api/v1/users', userV1);


export default app