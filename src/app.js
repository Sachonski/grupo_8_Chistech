const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoute");

app.use(express.static("../public"));

app.set("view engine", "ejs");

app.use('/', mainRoutes);

app.listen(process.env.PORT || 3030, () => console.log("Server running on port " + "http://localhost:" + 3030));

/*app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.ejs"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.ejs"));
});
app.post("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.ejs"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.ejs"));
});
app.post("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.ejs"));
});

app.get("/sobreNosotros", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/sobreNosotros.ejs"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/carrito.ejs"));
});

app.get("/productos", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productos.ejs"));
});

app.get("/detalle-producto", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/detalle-producto.ejs"));
});*/

