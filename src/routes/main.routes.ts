import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';

const router = Router();

router.get('/', (_req, res) => {
  res.send('Hello from the main route!');
});

router.use('/auth', authRoutes);

export default router;
