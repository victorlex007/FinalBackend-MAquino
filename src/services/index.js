import { ServicioDeUsuarios } from './ServicioDeUsuarios.js';
import { usuariosDao } from '../daos/index.js'

export const servicioDeUsuarios = new ServicioDeUsuarios({ usuariosDao })