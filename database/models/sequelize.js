const Sequelize = require('sequelize');

const path = 'mariadb://root@localhost:3306/chistech';

exports.sequelize = new Sequelize(path);