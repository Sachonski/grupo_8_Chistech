const id = (id) => document.getElementById(id);
const inputs = document.querySelectorAll('input');

const expressions = {
    first_name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, 
    last_name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, 
    user_name: /^[a-zA-Z0-9\_\-]{5,16}$/, 
    avatar: /(.jpg|.jpeg|.png|.gif)$/i,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    password: /^.{4,12}$/,
    birth:  /^\d{4}-\d{2}-\d{2}$/
}

const formData = {
    first_name: id('first_name'),
    last_name: id('last_name'),
    user_name: id('user_name'),
    avatar: id('avatar'),
    birth: id('birth'),
    email: id('email'),
    password: id('password'),
};

const errors = {
    first_name: id('first_name_error'),
    last_name: id('last_name_error'),
    user_name: id('user_name_error'),
    avatar: id("avatar_error"),
    birth: id('birth_error'),
    email: id('email_error'),
    password: id('password_error')
};

const validateFields = (e) => {
    switch (e.target.name) {
        case "first_name":
            expressions.first_name.test(formData.first_name.value.trim()) ? errors.first_name.innerHTML = '' : 
            errors.first_name.innerHTML = 
            'El nombre debe tener más de 4 letras, y no puede contener caracteres especiales'; 
            break;
        case "last_name":
            expressions.last_name.test(formData.last_name.value.trim()) ? errors.last_name.innerHTML = '' :
            errors.last_name.innerHTML = 
            'El apellido debe tener más de 4 letras, y no puede contener caracteres especiales'; 
            break;
        case "user_name":
            expressions.user_name.test(formData.user_name.value.trim()) ? errors.user_name.innerHTML = '' :
            errors.user_name.innerHTML = 
            'El nombre de usuario debe tener más de 5 letras, y no puede contener caracteres especiales';
            break;    
        case "avatar":
            expressions.avatar.test(formData.avatar.value)
              ? (errors.avatar.innerHTML = "")
              : (errors.avatar.innerHTML =
                  "Acepta solo imagenes con extension .jpg, .jpeg, .png, .gif");
            break;
        case "birth":
            expressions.birth.test(formData.birth.value) ? errors.birth.innerHTML = '' :
            errors.birth.innerHTML = 'Formato de fecha no valido';
            break;
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