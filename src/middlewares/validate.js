const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


function validate (req, res, next) {
    const user = req.body.email;

    const valid = users.find(u => u.email === user);
    
        valid ? next() : res.render('Error', {error: {msg: 'No se encueentra el usuario'}});

    
}

module.exports = validate;