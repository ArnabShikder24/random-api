const express = require('express');
const {getAllUser, getRandomUser} = require('../controllers/users.controller');

const router = express.Router();

router.get("/user/all", getAllUser);

router.get("/user/random", getRandomUser);

router.post("/user/save");

router.patch("user/update");

router.patch("/user/bulk-update");

router.delete("/user/delete");


module.exports = router;