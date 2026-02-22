import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/main.routes';

// load .env file into process.env early
dotenv.config();

// initialize application
const app: express.Application = express();

// setup app settings
app.use(express.json());

// load routes
app.use('/', router);

export default app;
