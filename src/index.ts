
import express from 'express';
import session from 'express-session';
import * as dotenv from 'dotenv';
import createConfig from './config/config';
import router from './routes/main.routes';


// load .env file into process.env early
dotenv.config();
const config = createConfig();

// initialize application
const app: express.Application = express();
const port = config.app.port;

// session setup (must come before any route that needs it)
app.use(session(config.session));

// load routes
app.use('/', router);

// run application
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});