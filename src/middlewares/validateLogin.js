const { check } = require('express-validator');

module.exports = [
	check('email')
	   .notEmpty().trim().withMessage('Debes completar el email').bail()
	   .isEmail().withMessage('Debes completar un email válido'), 
	check('password')
	   .notEmpty().withMessage('Debes completar la contraseña').bail()
	   .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
  ];