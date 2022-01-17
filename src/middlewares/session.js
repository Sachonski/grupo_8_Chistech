const userSession = (req, res, next) => {
    if(!req.session.user){
        res.send(404);
    } else {
       next();
    }
};

module.exports = userSession;