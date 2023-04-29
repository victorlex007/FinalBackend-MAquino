import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

passport.use('local', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await personasRepository.buscarPorEmail({ email })
        if (!user) {
            done(null, false)
        }
        if (compararContraEncriptado(password, user.password)) {
            done(null, user)
        } else {
            done(null, false)
        }
        done(null, user) //*
    } catch (error) {
        done(error)
    }
}))