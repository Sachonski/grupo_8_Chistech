const formulario = document.getElementById('formularioLogin');
const inputs = [];
inputs.push(document.getElementsByName("email"))
inputs.push(document.getElementsByName("password"));


const expresiones = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
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
   
    if (expresion.test(input.value) == true) {
        /*document.getElementById(`email`).classList.remove('input-contenedor-incorrecto');
        document.getElementById(`password}`).classList.add('input-contenedor-correcto');*/
        let visibility = document.getElementById("emailOculto");
        visibility.style.visibility = "hidden";
        console.log("entra true")
           
    } else if (expresion.test(input.value) == false)  {
        let visibility = document.getElementById("emailOculto");
        visibility.style.visibility = "visible";
        console.log("entra false")
    }
}


inputs.forEach((email) => {
    addEventListener('keyup', validarFormulario)
    addEventListener('blur', validarFormulario);
});


