const { sequelize } = require('./sequelize');

sequelize.authenticate()
    .then( () => {
        console.log("Conexión establecida");
    })