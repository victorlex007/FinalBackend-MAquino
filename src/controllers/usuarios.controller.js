import { DatosNuevoUsuario } from '../models/DatosNuevoUsuario.js';
import { servicioDeUsuarios } from '../services/index.js';

async function postController(req, res, next) {
    const datos = new DatosNuevoUsuario(req.body)
    const result = await servicioDeUsuarios.registrar(datos)
}

// controller (ejemplo MarianFinal)
// async function postPersonas(req, res, next) {
//     try {
//         const personaNuevaDto = new PersonaNuevaDto(req.body)
//         const persona = await personasService.registrar(personaNuevaDto)

//         // para dejarlo logueado luego del registro!
//         res.header('authorization', cifrarJWT(persona))

//         res.status(201).json(persona)
//     } catch (error) {
//         next(error)
//     }
// }