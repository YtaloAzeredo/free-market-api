import express from 'express';
import 'reflect-metadata';
import './bootstrap';
import './database';

const port = process.env.PORT;
import { routes } from './router';


function startpApp(): void {
  const app = express();
  app.use(express.json());
  routes.map((route) => app.use(route));
  app.listen(port);
  console.log(`----------------Server running on port ${port}----------------`);
}

startpApp();
