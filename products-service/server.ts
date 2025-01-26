import env from "dotenv";
import * as http from "http"
import app from "./src/app"

env.config();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Product server is running on ${process.env.PORT}.`);

})