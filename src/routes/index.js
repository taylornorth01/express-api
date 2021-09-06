import express from 'express';
import { indexPage, notesPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/notes', notesPage);

export default indexRouter;
