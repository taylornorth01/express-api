import express from 'express';
import { noteController } from '../controllers';
const router = express.Router();

router.post('/', noteController.addNote);
router.get('/', noteController.findNotes);
router.get('/:id', noteController.findNoteById);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteById);

export default router;
