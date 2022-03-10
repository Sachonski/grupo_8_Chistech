const id = (id) => document.getElementById(id);
const inputs = document.querySelectorAll("input");

const expressions = {
  name: /^[a-zA-ZÀ-ÿ0-9\s]{4,40}$/,
  description: /^[\w\W ]{4,150}$/,
  image: /(.jpg|.jpeg|.png|.gif)$/i,
  category: /^[1-5]$/,
  packaging: /^[0-1]$/,
  price: /^[0-9\.]{2,10}$/,
  discount: /^[0-9]{1,2}$/,
};

const formData = {
  name: id("name"),
  description: id("description"),
  image: id("image"),
  category: id("category"),
  packaging: id("packaging"),
  price: id("price"),
  discount: id("discount"),
};

const errors = {
  name: id("name_error"),
  description: id("description_error"),
  image: id("image_error"),
  category: id("category_error"),
  packaging: id("packaging_error"),
  price: id("price_error"),
  discount: id("discount_error"),
};

const validateFields = (e) => {
    console.log(formData);
  switch (e.target.name) {
    case "name":
      expressions.name.test(formData.name.value.trim())
        ? (errors.name.innerHTML = "")
        : (errors.name.innerHTML =
            "El nombre debe tener más de 4 letras, y no puede contener caracteres especiales");
      break;
    case "description":
      expressions.description.trim.test(formData.description.value.trim())
        ? (errors.description.innerHTML = "")
        : (errors.description.innerHTML =
            "La descripcion debe tener entre de 4 y 150 caracteres");
      break;
    case "image":
      expressions.image.test(formData.image.value)
        ? (errors.image.innerHTML = "")
        : (errors.image.innerHTML =
            "Acepta solo imagenes con extension .jpg, .jpeg, .png, .gif");
      break;
    case "category":
      expressions.category.test(formData.category.value)
        ? (errors.category.innerHTML = "")
        : (errors.category.innerHTML = "Elija una categoria");
      break;
    case "packaging":
      expressions.packaging.test(formData.packaging.value)
        ? (errors.packaging.innerHTML = "")
        : (errors.packaging.innerHTML = "Elija un tipo de presentacion");
      break;
    case "price":
      expressions.price.test(formData.price.value)
        ? (errors.price.innerHTML = "")
        : (errors.price.innerHTML = "Acepta solo numeros");
      break;
    case "discount":
      expressions.discount.test(formData.discount.value)
        ? (errors.discount.innerHTML = "")
        : (errors.discount.innerHTML = "Acepta solo numeros del 0 al 100");
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateFields);
  input.addEventListener("blur", validateFields);
});
