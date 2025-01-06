const mongoose = require("mongoose");


function connect () {
  mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("user service is connected to mongodb.");
  }).catch(err => console.log(`database error ${err}`))
}

module.exports = connect;