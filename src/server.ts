import env from './config/env';
import app from './app';

// run application
const port = env().app.port;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
