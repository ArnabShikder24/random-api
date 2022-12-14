const express = require('express');
const cors = require("cors");
const userRouter = require("./routes/users.route");
require("./config/db");

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.use(userRouter);

// Home route
app.get("/", (req, res) => {
      res.send({
            success: true,
            message: "server is Running..."
      })
})

// 404 route
app.use((req, res, next) => {
      res.status(404).json({
            message: "resourse not found"
      });
})

// Server Error
app.use((err, req, res, next) => {
      res.status(500).json({
            message: "Something Broke"
      })
})


module.exports = app;