import { User } from '@models/User';
import { Request, Response } from 'express';

class UsersController {
  create(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = new User(name, email);
    return res.json(user);
  }
};

export default new UsersController();
