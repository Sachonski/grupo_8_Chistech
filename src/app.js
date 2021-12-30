const express = require("express");
const morgan = require("morgan");
const bodyParser= require('body-parser')
const multer = require('multer');
const app = express();
const mainRoutes = require("./routes/mainRoute");
const methodOverride = require("method-override");

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json());

app.use(morgan('tiny'));

app.use(express.static("public"));

app.use(methodOverride("_method"));	

app.set("views", "./src/views");

app.set("view engine", "ejs");

app.use('/', mainRoutes);


app.listen(process.env.PORT || 3030, () => console.log("Server running on port " + "http://localhost:" + 3030));
