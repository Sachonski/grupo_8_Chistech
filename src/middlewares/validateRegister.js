const { check } = require('express-validator');

module.exports = [
	check('first_name')
		.notEmpty().trim().isLength({ min: 2 }).withMessage('Debes completar el nombre').bail(), //.isLength({ min: 2 })
	check('last_name')
		.notEmpty().trim().isLength({ min: 2 }).withMessage('Debes completar el apellido').bail(), // .isLength({ min: 2 })
	check('user_name')
		.notEmpty().trim().withMessage('Debes completar el nombre').bail()
		.isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
	check('birth')
		.notEmpty().withMessage('Debes completar la fecha de nacimiento').bail()
		.isDate().withMessage('La fecha de nacimiento no es válida'),
	check('email')
	   .notEmpty().trim().withMessage('Debes completar el email').bail()
	   .isEmail().withMessage('Debes completar un email válido'), //todo consulta existencie) **guglea custom validator**
	check('password')
	   .notEmpty().trim().withMessage('Debes completar la contraseña').bail()
	   .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga'), //todo **investigar regex**
  ];
  //todo cuando este el input de imagen =>> validar extension **investigar extensiones**