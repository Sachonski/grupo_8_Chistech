const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

const controller2 = {
    // Initialize the controller
    listarUsuarios: (req, res) => {
        return res.render('users', { users: users });
    },

    detalleUsuario:(req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id == id);
        return res.render('userDetail', { user: user });
    },
  
    login: (req, res) => {
        return res.render('userLogin');
    },

    //falta controller para login
    loginpost: (req, res) => {
        let errors = validationResult(req);
        console.log(errors);

        if (errors.isEmpty()) {
            res.redirect('/');       
    } else {
        res.render('userLogin', {msgErrors: errors.mapped(), old: req.body});        
    }         
    },    

    register: (req, res) => {
        return res.render('userRegister');
    },

    registerpost: (req, res) => {
        // let errors = validationResult(req);
        // if (errors.isEmpty()) {   
            console.log(req.body);
            let { first_name, last_name, birth, password, email} = req.body;
            const newUser = {}
            newUser.id = users[users.length - 1].id + 1;
            newUser.first_name = first_name;
            newUser.last_name = last_name;
            newUser.email = email;
            newUser.birth = birth;
            newUser.password = password;
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users));
            res.redirect('/');
        
        // } else {
        //     res.render('userRegister', {msgErrors: errors.mapped(), old: req.body});     
        //     console.log(req.body);   
        // }   
              
},

    delete: (req, res) => {
        
        const id = req.params.id;
        const user = users.find(users => users.id == id);

        users.splice(users.indexOf(user), 1);

        fs.writeFileSync(usersFilePath, JSON.stringify(users));

        if (fs.existsSync(`public/img/users/${user.image}`)) {
            fs.unlinkSync(`public/img/users/${user.image}`);
        }
        res.redirect('../../users/login');
    },

    editarget: (req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id == id);
        res.render('userEdit', { user: user });
    },

    editarput: (req, res) => {

        const id = req.params.id;
        const user = users.find(user => user.id == id);
        const { first_name, last_name, birth, email, password} = req.body;

        user.id = user.id;
        user.first_name = first_name;
        user.last_name = last_name;
        user.birth = birth;
        user.email = email;
        user.gender = user.gender;
        user.password = password;
        user.admin = user.admin;


        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect('/');
    },

}

module.exports = controller2;
