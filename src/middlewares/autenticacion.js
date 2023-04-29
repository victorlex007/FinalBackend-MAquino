function autenticacion(req, res, next) {
    // si no tiene credenciales/token reboto con error 401....
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) next(new ErrorDeAutenticacion())
    // buscamos un bearer token, con formato: 'bearer gs98d7ff97fdg987df9g87ads9f8a7sd98af7'
    const token = authorizationHeader.split(' ')[1]

    const user = descifrarJWT(token)

    // sino, autenticacion exitosa
    req.user = user
    next()
}