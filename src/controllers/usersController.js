const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller2 = {
    // Initialize the controller
    listarUsuarios: (req, res) => {
        return res.render('users', { users: users });
    },
    login: (req, res) => {
        return res.render('login');
    },
    register: (req, res) => {
        return res.render('register');
    },

    loginpost: (req, res) => {
        return res.send("loginpost" );
    },
    registerpost: (req, res) => {

        const { nombre, fechadeNacimiento,password,confirmPassword} = req.body;
        const newUser = {}
        newUser.id = users[users.length - 1].id + 1;
        newUser.nombre = nombre;
        newUser.fechadeNacimiento = fechadeNacimiento;
        newUser.password = password;
        newUser.confirmPassword = confirmPassword;  
        newUser.fotoPerfil = (req.file) ? req.file.filename : "no image";
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect('/productos');
    },
 
    detalleUsuario:(req, res) => {
        const id = req.params.id;
        console.log(id)
        const user = users.find(user => user.id == id);
        return res.render('detalle-usuario', { user: user });
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

    editarput: (req, res) => {
        return res.send("postusuario" );
    },

    editarget: (req, res) => {
        return res.send("getusuario" );
    },

}

module.exports = controller2;
