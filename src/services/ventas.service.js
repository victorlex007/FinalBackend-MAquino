import { ListaDeProductos } from '../repositories/listaDeProductos/listaDeProductos.js'
import { registroDeVentas } from '../repositories/registroDeVentas/index.js'
import { Venta } from '../models/Venta.js'

class VentasService {
    async vender({ id, cantidad }) {
        const prod = await ListaDeProductos.buscarPorId(id)
        prod.disminuirStock(cantidad)
        await ListaDeProductos.guardar(prod)

        const nuevaVenta = new Venta()
        nuevaVenta.agregarItem({ id, precio: prod.precio, cantidad })
        await registroDeVentas.guardar(nuevaVenta)

        return nuevaVenta
    }
}

export const ventasService = new VentasService()