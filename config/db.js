const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err.message);
    //exit process with failure
    process.exit(1);
  }
};
// "mongoURI": "mongodb://localhost/testapi",

module.exports = connectDB;
