import { Usuario } from '../models/Usuario.js'

export class ServicioDeUsuarios {
    #usuariosDao
    constructor({ usuariosDao }) {
        this.#usuariosDao = usuariosDao
    }

    async registrar(datosNuevoUsuario) {
        const usuario = new Usuario(datosNuevoUsuario)
        const usuarioDto = usuario.asDto()
        await this.#usuariosDao.guardar(usuarioDto)
        return usuarioDto
    }

    async buscar(id) {
        return await this.#usuariosDao.buscarPorId(id)
    }

    async borrarTodos() {
        await this.#usuariosDao.borrarTodos()
    }
}