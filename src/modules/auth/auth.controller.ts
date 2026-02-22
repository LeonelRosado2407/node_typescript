import { Request, Response } from 'express';
import { registerUser } from './auth.schema';

export const register = (req: Request<registerUser>, res: Response) => {
  res.json(req.body);
};
