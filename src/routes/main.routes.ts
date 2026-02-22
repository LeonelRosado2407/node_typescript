import e, { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.send('Hello from the main route!');
});

router.get('/session', (req, res) => {
  if (req.session.userId) {
    res.send(`User ID in session: ${req.session.userId}`);
  } else {
    req.session.userId = '12345'; // Example user ID, in a real application this would come from a login process
    res.send('No user ID in session.');
  }
});

export default router;
