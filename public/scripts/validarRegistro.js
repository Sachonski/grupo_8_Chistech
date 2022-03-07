const formulario = document.getElementById('formularioReg');
const inputs = document.querySelectorAll('#formularioReg input')


const expresiones = {
    first_name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
    last_name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
    user_name: /^[a-zA-Z0-9\_\-]{5,16}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,12}$/, 
    birth:  /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/\/](19|20)\d{2}$/
}

const campos = {
    first_name: false,
    last_name: false,
    user_name: false,
    password: false,
    email: false,
    birth:false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "first_name":
            validarCampo(expresiones.nombre, e.target, 'first_name');
            break;
        case "last_name":
            validarCampo(expresiones.nombre, e.target, 'last_name');
            break;
        case "user_name":
            validarCampo(expresiones.usuario, e.target, 'user_name');
            break;
        case "birth":
            validarCampo(expresiones.usuario, e.target, 'birth');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
        case "password2":
            validarPassword2();
            break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
            break;
    }
}
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementsByName(`${campo}`).classList.remove('input-contenedor-incorrecto');
        document.getElementsByName(`${campo}`).classList.add('input-contenedor-correcto');
        document.getElementsByName(`${campo}`).classList.add('fa-check-circle');
        document.getElementsByName(`${campo}`).classList.remove('fa-times-circle');
        campos[campo] = true;
    } else {
        document.getElementsByName('first_name').classList.remove('input-contenedor-incorrecto');
        document.getElementsByName('last_name').classList.add('input-contenedor-correcto');
        document.getElementsByName('user_name').classList.add('fa-check-circle');
        document.getElementsByName('email').classList.remove('fa-times-circle');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('input-contenedor-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('input-contenedor-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('input-contenedor-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('input-contenedor-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario);
});