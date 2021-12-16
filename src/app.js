const express = require("express");
const morgan = require("morgan");
const app = express();
const mainRoutes = require("./routes/mainRoute");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(morgan('tiny'));

app.use(express.static("public"));

app.set("views", "./src/views");

app.set("view engine", "ejs");

app.use('/', mainRoutes);


app.listen(process.env.PORT || 3030, () => console.log("Server running on port " + "http://localhost:" + 3030));
