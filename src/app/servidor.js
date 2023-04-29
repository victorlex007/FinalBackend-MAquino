import express from 'express'
import { DatosNuevoUsuario } from '../models/DatosNuevoUsuario.js'
import { servicioDeUsuarios } from '../services/index.js'

const app = express()
app.use(express.json())

app.post('/api/usuarios', async (req, res, next) => {

    const { nombre } = req.body

    const datosNuevoUsuario = new DatosNuevoUsuario({
        nombre
    })

    const usuarioRegistrado = await servicioDeUsuarios.registrar(datosNuevoUsuario)

    res.status(201).json(usuarioRegistrado)
})

app.get('/api/usuarios/:id', async (req, res, next) => {
    const usuarioBuscado = await servicioDeUsuarios.buscar(req.params.id)
    res.json(usuarioBuscado)
})

let server

export function conectar(puerto) {
    return new Promise((resolve, reject) => {
        server = app.listen(puerto, () => {
            // console.log(`escuchando en ${puerto}`)
            resolve(true)
        })
    })
}

export function desconectar(puerto) {
    return new Promise((resolve, reject) => {
        server.close(err => {
            // console.log(`desconectado!`)
            resolve(true)
        })
    })
}