import noteDao from '../database/dao/note.dao';

const addNote = (req, res) => {
  let note = req.body;
  noteDao
    .create(note)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const findNoteById = (req, res) => {
  noteDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteById = (req, res) => {
  noteDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: 'Note deleted successfully',
        note: data
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateNote = (req, res) => {
  noteDao
    .updateNote(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: 'Note updated successfully',
        note: data
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const findNotes = (req, res) => {
  noteDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

let noteController = {
  addNote: addNote,
  findNotes: findNotes,
  findNoteById: findNoteById,
  updateNote: updateNote,
  deleteById: deleteById
};

export default noteController;
