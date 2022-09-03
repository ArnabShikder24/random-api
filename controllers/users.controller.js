const users = require("../models/users.model");

const getAllUser = (req, res) => {
      res.status(200).json({
            success: true,
            data: users
      })
}

const getRandomUser = (req, res) => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      res.status(200).json({
            success: true,
            data: randomUser
      });
}

const saveRandomUser = (req, res) => {
      
} 

module.exports = {
      getAllUser,
      getRandomUser
}