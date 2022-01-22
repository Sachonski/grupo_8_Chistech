// LO COMENTO PORQUE NO ESTA ANDANDO HASTA NO RESOLVER SESSION
function userLogged (req, res, next) {
    res.locals.isLogged = false;
    let userCookie = req.cookies.remember;
    console.log('********userCookie: ' + userCookie);
    if (userCookie) {
        req.session = userCookie;
    }
    console.log('*********req.session.user: ' + req.session);
    if (req.session && req.session) {
        res.locals.isLogged = true;
        res.locals.user = req.session.user;
    }
    console.log('**********isLogged: ' + res.locals.isLogged);
    next();
}
module.exports = userLogged;