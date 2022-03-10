const id = (id) => document.getElementById(id);
const inputs = document.querySelectorAll('input');

const expressions = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    password: /^.{4,12}$/,
}

const formData = {
    email: id('email'),
    password: id('password'),
};

const errors = {
    email: id('email_error'),
    password: id('password_error')
};

const validateFields = (e) => {
    switch (e.target.name) {        
        case "email":
            expressions.email.test(formData.email.value.trim()) ? errors.email.innerHTML = '' :
            errors.email.innerHTML = 'El email no es válido';
            break;
        case "password":
            expressions.password.test(formData.password.value.trim()) ? errors.password.innerHTML = '' :
            errors.password.innerHTML = 
            'La contraseña debe tener más de 4 letras, y no puede contener caracteres especiales';
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateFields);
    input.addEventListener('blur', validateFields);
});