import express from 'express';
import { indexPage, notesPage } from '../controllers';
import { default as noteRoutes } from './note.route';

const router = express.Router();

router.get('/', indexPage);

/*
 * Routes passed as an object to the router instance.
 */
router.use('/notes', noteRoutes);

export default router;
