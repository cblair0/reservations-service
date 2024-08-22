import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import openingsV1 from './src/routes/api/v1/openings';
import reservationsV1 from './src/routes/api/v1/reservations';
import userV1 from './src/routes/api/v1/users';

app.use(bodyParser.json());
app.use('/api/v1/openings', openingsV1);
app.use('/api/v1/reservations', reservationsV1);
app.use('/api/v1/users', userV1);


export default app