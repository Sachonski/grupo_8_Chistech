const quesos = [
  { nombre: "Porsalut", precioXKilo: 10, stock: 5 },
  { nombre: "Sardo", precioXKilo: 20, stock: 5 },
  { nombre: "Cremoso", precioXKilo: 30, stock: 5 },
  { nombre: "Parmesano", precioXKilo: 40, stock: 5 },
  { nombre: "Finlandia", precioXKilo: 50, stock: 5 },
  { nombre: "Untable", precioXKilo: 25, stock: 5 },
];
const leches = [
  { nombre: "Entera", precio: 10, stock: 5 },
  { nombre: "Descremada", precio: 20, stock: 5 },
  { nombre: "Condensada", precio: 30, stock: 5 },
  { nombre: "Deslactosada", precio: 40, stock: 5 },
  { nombre: "En polvo", precio: 50, stock: 5 },
  { nombre: "Extracalcio", precio: 40, stock: 5 },
];
const mantecas = [
  { nombre: "Con sal", precio: 10, stock: 5 },
  { nombre: "Sin sal", precio: 20, stock: 5 },
  { nombre: "Light", precio: 30, stock: 5 },
];

const yogurt = [
  { nombre: "Firme", precio: 10, stock: 5 },
  { nombre: "Bebible", precio: 20, stock: 5 },
  { nombre: "Griego", precio: 30, stock: 5 },
  { nombre: "Saborizado", precio: 40, stock: 5 },
  { nombre: "Batido", precio: 50, stock: 5 },
];
const cremas = [
  { nombre: "Liviana", precio: 10, stock: 5 },
  { nombre: "Chantilly", precio: 20, stock: 5 },
  { nombre: "Para batir", precio: 30, stock:5 },
];
const dulceDeLeches = [
  { nombre: "Colonial", precio: 10, stock: 5 },
  { nombre: "Tradicional", precio: 20, stock: 5 },
  { nombre: "Clásico", precio: 30, stock: 5 },
  { nombre: "Repostero", precio: 40, stock: 5 },
];
const lacteos = [
  { leches },
  { mantecas },
  { yogurt },
  { cremas },
  { quesos },
  { dulceDeLeches },
];

let productos = JSON.stringify(lacteos);
console.log(productos);
//qué conviene usar?: module.exports || object.json
