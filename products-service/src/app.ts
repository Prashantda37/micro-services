import env from "dotenv";
import express, { Express } from "express"
import bodyParser from "body-parser";
import connect from "./db/db"
import router from "./routes/products.routes"
import { IUser } from "./utilities/user.interface"

env.config();

declare global {
  namespace Express {
    interface Request {
      user?: IUser
    }
  }
}

const app: Express = express();
// DB connection
connect()

const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlEncodedParser);
app.use(bodyParser.json());

app.use("/", router);

export default app;