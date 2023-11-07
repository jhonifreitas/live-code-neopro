import express from 'express';
import 'express-async-errors';

import cors from 'cors';
import dotenv from 'dotenv';
import nocache from 'nocache';

import { errorHandler } from './middlewares/error-handler';
import routes from './routes/index';
import mongoService from './services/mongo.service';

dotenv.config();

const app = express();

mongoService.connect();

app.disable('x-powered-by');

app.use(nocache());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(errorHandler);

export default app;
