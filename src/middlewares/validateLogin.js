const { check } = require('express-validator');

module.exports = [
	check('nombreUsuario')
		.notEmpty().withMessage('Debes completar el nombre').bail()
		.isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
	check('password')
	   .notEmpty().withMessage('Debes completar la contraseña').bail()
	   .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
  ];