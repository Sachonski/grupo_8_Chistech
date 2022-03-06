/* validaciones:
Nombre
■ Obligatorio.
■ Deberá tener al menos 5 caracteres.
○ Descripción
■ Deberá tener al menos 20 caracteres.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
○ (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base.
*/
const { check } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().trim().withMessage('El nombre es obligatorio').bail()
        .isLength({ min: 5 }).withMessage('Debes completar el nombre').bail(),
    check('description')
        .notEmpty().trim().withMessage('Debes completar la desripcion').bail()
        .isLength({ min: 20 }).withMessage('La descripcion debe ser mas larga'),
    check('category')
        .isInt({ min: 0, max: 5 }).withMessage('Debes seleccionar una categoria'),
    check('packaging')
        .isInt({ min: 0, max: 1 }).withMessage('Debes seleccionar un empaque valido'),
    check('price')
        .notEmpty().trim().withMessage('Ingresa un valor').bail()
        .isNumeric().withMessage('Debes ingresas numeros'),
    check('discount')
        .isInt().withMessage('Debes ingresas numeros'),
    check('stock')
        .notEmpty().withMessage('Debes ingresar un valor').bail()
];