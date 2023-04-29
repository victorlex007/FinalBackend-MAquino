import { randomUUID } from 'crypto';

export class Usuario {
    #id
    #nombre

    constructor({ id = randomUUID(), nombre }) {
        this.#id = id
        this.#nombre = nombre
    }

    asDto() {
        return {
            id: this.#id,
            nombre: this.#nombre
        }
    }
}