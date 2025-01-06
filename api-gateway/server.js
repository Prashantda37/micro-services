const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use("/user", proxy("http://localhost:3001"))

app.listen(3000, () => {
  console.log("API server running on 3000")
})