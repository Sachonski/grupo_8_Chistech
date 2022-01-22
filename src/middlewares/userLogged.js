function userLogged (req, res, next) {
    res.locals.isLogged = false;
    let userCookie = req.cookies.remember;
    if (userCookie) {
        req.session.user = userCookie;
    }
    if (req.session && req.session) {
        res.locals.isLogged = true;
        res.locals.user = req.session.user;
    }
    next();
}
module.exports = userLogged;