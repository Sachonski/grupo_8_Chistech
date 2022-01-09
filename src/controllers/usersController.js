const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller2 = {
    // Initialize the controller
    login: (req, res) => {
        return res.send("login" );
    },
    register: (req, res) => {
        return res.send("register" );
    },

    loginpost: (req, res) => {
        return res.send("loginpost" );
    },
    registerpost: (req, res) => {
        return res.send("registerpost" );
    },

    creacion: (req, res) => {
        return res.send("creacion" );
    },

    creacionpost: (req, res) => {
        return res.send("creacionpost" );
    },
  
    detalleusuario:(req, res) => {
        return res.send("detalleUsuario" );
    },
 
    delete: (req, res) => {
        return res.send("deleteUsuario" );
    },

    editarput: (req, res) => {
        return res.send("postusuario" );
    },

    editarget: (req, res) => {
        return res.send("getusuario" );
    },

}

module.exports = controller2;
