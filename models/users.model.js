const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
      name: {
            type: String,
            require: true
      },
      gender: {
            type: String,
            require: true
      },
      email: {
            type: String,
            require: true
      },
      phone: {
            type: String,
            require: true
      },
      address: {
            type: String,
            require: true
      },
      photoUrl: {
            type: String,
            require: true
      },
})

module.exports = mongoose.model("users", usersSchema);