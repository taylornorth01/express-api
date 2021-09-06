import Note from '../models/note.model';

const findAll = () => {
  return Note.findAll();
};

const findById = (id) => {
  return Note.findByPk(id);
};

const deleteById = (id) => {
  return Note.destroy({ where: { id: id } });
};

const create = (note) => {
  var newNote = new Note(note);
  return newNote.save();
};

const updateNote = (note, id) => {
  let updateNote = {
    text: note.text,
    tag: note.tag
  };
  return Note.update(updateNote, { where: { id: id } });
};

let noteDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateNote: updateNote
};

export default noteDao;
