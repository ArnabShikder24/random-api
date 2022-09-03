const express = require('express');
const { getAllUser, getRandomUser, saveRandomUser, updateUser, deleteUser } = require('../controllers/users.controller');

const router = express.Router();

router.get("/user/all", getAllUser);

router.get("/user/random", getRandomUser);

router.post("/user/save", saveRandomUser);

router.patch("/user/update/:id", updateUser);

router.patch("/user/bulk-update");

router.delete("/user/delete/:id", deleteUser);


module.exports = router;