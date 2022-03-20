const express = require("express");
const morgan = require("morgan");
const bodyParser= require('body-parser')
const cookies = require('cookie-parser');
const cors = require('cors')

const app = express();

const session = require("express-session");
const methodOverride = require("method-override");

const userLogged = require('./middlewares/userLogged');
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const remember = require("./middlewares/remember");

//Aquí llamo a la ruta de las api 
const productsRoutesApi = require('./routes/api/productsRoutesApi');
const usersRoutesApi = require('./routes/api/usersRoutesApi');
const salesRoutesApi = require('./routes/api/salesRoutesApi');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

app.use(session({
    cookie: {maxAge:60*60*1000},
    secret: "mySecret",
    resave: false,
    saveUninitialized: true,
}));

app.use(cookies());

app.use(userLogged);

app.use(remember);

app.use(express.json());

app.use(morgan('tiny'))

app.use(express.static("public"));

app.use(methodOverride("_method"));	

//configuracion del motor de vistas
app.set("views", "./src/views");

app.set("view engine", "ejs");

// configuracion de las rutas
app.use('/', mainRoutes);

app.use ('/users' , usersRoutes);

app.use ('/products' , productsRoutes);

// Configuracion de APIs

//Aquí creo la colección de mis recursos de movies (APIs)
app.use('/api/products',productsRoutesApi);
app.use('/api/users',usersRoutesApi);
app.use('/api/sales', salesRoutesApi);

// configuracion del puerto
app.listen(process.env.PORT || 3030, () => console.log("Server running on port " + "http://localhost:" + 3030));

