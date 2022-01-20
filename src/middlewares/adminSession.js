const adminSession = (req, res, next) => {
    if(req.session.user && session.user.admin === true){
        next();
    } else {
       res.send('Esta pagina es solo para administradores. Registrate o inicia sesion: <a href="/users/register">Registrarse</a> o <a href="/users/login">Iniciar sesion</a>');
    }
};

module.exports = adminSession;