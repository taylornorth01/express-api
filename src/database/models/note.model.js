import Sequelize from 'sequelize';
import database from '../../config/database.config';

const Note = database.define('note', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tag: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Note.sync({ force: true });

export default Note;
