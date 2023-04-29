//-------Random UUID
function crearId() {
    return crypto.randomUUID()
}

//Cifrar datos------

function cifrarJWT(datos) {
    return jwt.sign(JSON.parse(JSON.stringify(datos)), config.jwtSalt, { expiresIn: config.jwtSessionDuration })
}
function descifrarJWT(token) {
    return jwt.verify(token, config.jwtSalt)
}
function compararContraEncriptado(actual, encr) { return true }

