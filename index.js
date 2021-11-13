const express = require ('express');
const app = express();
const port = 3030;
const path = require('path');


app.listen(port, () => { console.log("Server running on " + port)});

<<<<<<< HEAD
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
=======
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'view/home.html'))
>>>>>>> refs/remotes/origin/main
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



