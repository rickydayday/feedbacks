const express = require('express')
const path = require('path')
const morgan = require("morgan");


const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

app.set("view engine", ".hbs");




app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

app.use("/public", express.static(path.join(__dirname, "public")));

module.exports = app;