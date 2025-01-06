const env = require("dotenv")
const express = require("express");
const connect = require("./db/db");
const bodyParser = require("body-parser")
const userRoutes = require("./routes/user.routes");
const app = express();
env.config();
// DB connection
connect();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser);
app.use(bodyParser.json());

// Routers
app.use("/", userRoutes)

module.exports = app;

