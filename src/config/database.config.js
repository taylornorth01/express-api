import { DB_POSTGRES } from '../settings';
import Sequelize from 'sequelize';
const database = new Sequelize(DB_POSTGRES);

export default database;
