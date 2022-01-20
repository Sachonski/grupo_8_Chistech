const userSession = (req, res, next) => {
    if(!req.session.user){
        res.send('Esta pagina es solo para usuarios. Registrate o inicia sesion: <a href="/users/register">Registrarse</a> o <a href="/users/login">Iniciar sesion</a>');
    } else {
       next();
    }
};

module.exports = userSession;