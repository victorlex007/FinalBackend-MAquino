import { mongoClient } from '../../database/mongoClient.js'
import { ErrorIdNoEncontrado } from '../../errors/ErrorIdNoEncontrado.js'


export class ListaDeProductosMongoDb {
    

    constructor(mongoClient) {
        this.prods = mongoClient.db().collection("products")
    }

    async buscarPorId(id) {
        const buscado =  await this.prods.findOne({id})
        if (!buscado) throw new ErrorIdNoEncontrado(id)
        return buscado
    }

}

export const listaDeProductos = new ListaDeProductosMongoDb(mongoClient)