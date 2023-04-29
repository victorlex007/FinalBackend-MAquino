import { MongoClient } from '../database/mongoClient.js';
import { UsuariosDao } from './UsuariosDao.js';

export const usuariosDao = new UsuariosDao(mongoClient)