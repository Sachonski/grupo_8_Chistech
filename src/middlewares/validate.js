// const fs = require('fs');
// const path = require('path');
// const usersFilePath = path.join(__dirname, '../../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;


function validate (req, res, next) {
    const user = req.body.email;

    db.User.findOne({
        where : {email : {user} }
    }).then(valid => {
        valid ? next() : res.render('Error', {error: {msg: 'No se encueentra el usuario'}});
    }).catch(error => {
        res.render('Error', {error: {msg: "error"}} )
    })

    // const valid = users.find(u => u.email === user);
    
    //     valid ? next() : res.render('Error', {error: {msg: 'No se encueentra el usuario'}});

}

module.exports = validate;

