import mongoose from "mongoose";

function connect() {
  mongoose.connect(`${process.env.MONGO_DB}`).then(() => {
    console.log("product service is connected to mongodb.");
  }).catch(err => console.log(`database error ${err}`))
}

export default connect;