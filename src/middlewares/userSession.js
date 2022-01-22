const userSession = (req, res, next) => {
    let sessionOk = req.session.user;
    if(!sessionOk){
        res.render('Error', {error: {msg: 'Debes iniciar sesión'}});
    } else {
       next();
    }
};

module.exports = userSession;  