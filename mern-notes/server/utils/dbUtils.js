import mongoose from 'mongoose';

import '../models/Note';
import config from '../../config/config';

const Note = mongoose.model('Note');

export const setupConnection = () => {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
};

export const getNotesList = () => {
  return Note.find();
};

export const createNote = (data) => {
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    createdAt: data.createdAt,
  });
  return note.save();
};

export const deleteNote = (id) => {
  return Note.findById(id).remove();
};
