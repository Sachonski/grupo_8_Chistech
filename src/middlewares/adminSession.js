const adminSession = (req, res, next) => {
    if(req.session.user && req.session.user.admin === 1){
      console.log('adminSession: ' + req.session.user);
        next();
    } else {
       res.send('Esta pagina es solo para administradores. <a href="/">HOME</a>');
    }
};

module.exports = adminSession;