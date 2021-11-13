const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.html"));
});
app.get("/sobreNosotros", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/sobreNosotros.html"));
});
app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/carrito.html"));
});
app.get("/productos", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productos.html"));
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
