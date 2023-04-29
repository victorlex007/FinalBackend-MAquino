export class DatosNuevoUsuario {
    constructor({ nombre }) {
        if (!nombre) throw new Error('falta el nombre')
        this.nombre = nombre
    }
}