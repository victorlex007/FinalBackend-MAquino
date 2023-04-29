import { Producto } from '../src/models/Producto.js'
import { ListaDeProductos } from '../src/repositories/listaDeProductos/listaDeProductos.js'
import { ventasService } from '../src/services/ventas.service.js'


ListaDeProductos.prods.push(new Producto({id:1, precio: 1000, stock: 3}))

const venta = await ventasService.vender({id: 1, cantidad: 3})

console.log(venta)


// // meto un producto de pruebas
// const prod = await listaDeProductos.guardar(new Producto({ id: 1, precio: 1000, stock: 3 }))

// // esta venta no deberia fallar
// const venta = await ventasService.vender({ id: 1, cantidad: 3 })
// console.log(venta.datos())

// // esta venta sí deberia fallar
// try {
//     await ventasService.vender({ id: 1, cantidad: 3 })
//     console.log('ERROR!!! debería haber fallado por falta de stock!!')
// } catch (error) {
//     console.log('OK: fallo correctamente pq no queda stock (' + error.message + ')')
// }