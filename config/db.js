const mongoose = require("mongoose");
const config = require("./config");

const dbUrl = config.db.url;

mongoose.connect(dbUrl)
.then(() => {
      console.log("mongodb atlas is connected");
})
.catch((error) => {
      console.log(error);
      process.exit(1);
})
