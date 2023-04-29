export class UsuariosDao {
    #usuariosDb;
    constructor(mongodbClient) {
        this.#usuariosDb = mongodbClient.db().collection('usuarios');
    }

    async guardar(usuarioDto) {
        await this.#usuariosDb.insertOne(usuarioDto);
    }

    async buscarPorId(id) {
        return await this.#usuariosDb.findOne({ id });
    }

    async borrarPorId(id) {
        await this.#usuariosDb.deleteOne({ id })
    }

    async borrarTodos() {
        await this.#usuariosDb.deleteMany({})
    }
}