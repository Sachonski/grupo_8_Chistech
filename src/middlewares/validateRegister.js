const { check } = require('express-validator');

module.exports = [
	check('first_name')
		.notEmpty().trim().withMessage('Debes completar el nombre').bail(),
	check('last_name')
		.notEmpty().trim().withMessage('Debes completar el apellido').bail(),
	check('user_name')
		.notEmpty().trim().withMessage('Debes completar el nombre').bail()
		.isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
	check('birth')
		.notEmpty().withMessage('Debes completar la fecha de nacimiento').bail()
		.isDate().withMessage('La fecha de nacimiento no es válida'),
	check('email')
	   .notEmpty().trim().withMessage('Debes completar el email').bail()
	   .isEmail().withMessage('Debes completar un email válido'),
	check('password')
	   .notEmpty().trim().withMessage('Debes completar la contraseña').bail()
	   .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga'),
  ];