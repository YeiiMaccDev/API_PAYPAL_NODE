import express from 'express';
import { HOST, PORT } from '../config.js';
import path from 'path';

import paymentRoute from './routes/payment.js'


const app = express();

app.use(paymentRoute);

app.use(express.static(path.resolve('src/public')));

app.listen(PORT);
console.log(`SERVER: ${HOST}`);