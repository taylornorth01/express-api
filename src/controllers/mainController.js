import { Note } from '../app';

export const indexPage = (req, res) => {
  res.status(200).json({ message: 'Welcome to your express application' });
};

export const notesPage = (req, res) => {
  Note.findAll().then((notes) => {
    res.json(notes);
  });
};
