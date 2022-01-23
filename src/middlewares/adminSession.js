const adminSession = (req, res, next) => {
    if(req.session.user && req.session.user.admin === 1){
        next();
    } else {
      res.render('Error', {error: {msg: 'Esta pagina es solo para administradores'}});
    }
};

module.exports = adminSession;