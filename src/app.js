import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';

/*
 *  Setting up Sequalize with Postgres
 */

import { DB_POSTGRES } from './settings';
import Sequelize from 'sequelize';
const sequelize = new Sequelize(DB_POSTGRES);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

/*
 *  Setting up the Express app
 */

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

export default app;
