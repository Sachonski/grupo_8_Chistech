const express = require("express");
const morgan = require("morgan");
const bodyParser= require('body-parser')
const cookieParser = require('cookie-parser');
const multer = require('multer');
const app = express();
const session = require("express-session");
const methodOverride = require("method-override");

const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const remember = require("./middlewares/remember");

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cookieParser());

app.use(session({
    cookie: {maxAge:60*60*1000},
    secret: "mySecret",
    resave: false,
    saveUninitialized: true,
    sameSite: false
}));
app.use(remember);

app.use(express.json());

app.use(morgan('tiny'));

app.use(express.static("public"));

app.use(methodOverride("_method"));	

app.set("views", "./src/views");

app.set("view engine", "ejs");

app.use('/', mainRoutes);

app.use ('/users' , usersRoutes);


app.listen(process.env.PORT || 3030, () => console.log("Server running on port " + "http://localhost:" + 3030));
