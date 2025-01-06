const env = require("dotenv");
const http = require("http");
const app = require("./src/app");
env.config()

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`user service is running on ${process.env.PORT}`)
})