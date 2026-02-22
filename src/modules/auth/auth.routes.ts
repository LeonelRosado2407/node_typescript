import { Router } from 'express';
import { validateSchema } from '../../shared/middlewares/validateRequest.middleware';
import { registerSchema } from './auth.schema';
import { register } from './auth.controller';

const router = Router();

router.post('/register', validateSchema(registerSchema), register);

export default router;
