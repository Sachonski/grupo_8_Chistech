function remember(req, res, next) {
    if (req.cookies.remember) {
        req.session.user = req.cookies.remember;    
    }
    console.log('adminSession de cookie : ' + req.session.user);

    next();
}
module.exports = remember;