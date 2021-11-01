const express = require("express");
const path = require("path");
const app = express();
const port = 3030;
app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/register.html"));
});
app.get("/sobreNosotros", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/sobreNosotros.html"));
});
app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/carrito.html"));
});
app.get("/productos", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productos.html"));
});
