const express = require("express");
const path = require("path");
const port = 3030
const app = express();


app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
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
  console.log("Server running on port " + "http://localhost:"+port);
});
