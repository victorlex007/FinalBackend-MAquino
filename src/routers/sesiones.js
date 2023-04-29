const sesionesRouter = Router()

// login
sesionesRouter.post('/', passport.authenticate('local', { failWithError: true }), (req, res, next) => {
    res.header('authorization', cifrarJWT(req.user))
    // res.cookie('authorization', cifrarJWT(req.user)) // otra opcion, requiere cookie-parser
    res.sendStatus(201)
})

