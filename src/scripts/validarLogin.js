const formulario = document.getElementById('formularioLogin');
const inputs = document.querySelectorAll('#formularioLogin input')
console.log('validaciones login')

const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}

const campos = {
    password: false,
    email: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {

        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
    }
}
const validarCampo = (expresion, input, campo) => {
        console.log('hola')
        document.getElementById(`grupo__${campo}`).classList.remove('input-contenedor-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('input-contenedor-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario);
});