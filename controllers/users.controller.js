const users = require("../models/users.model");

const getAllUser = async (req, res) => {
      try {
            const allusers = await users.find();
            res.status(200).json({
                  success: true,
                  data: allusers
            })
      } catch (error) {
            res.status(500).send(error.message);
      }
}

const getRandomUser = async (req, res) => {
      try {
            const allusers = await users.find();
            const randomUser = allusers[Math.floor(Math.random() * allusers.length)];
            res.status(200).json({
                  success: true,
                  data: randomUser
            }); 
      } catch (error) {
            res.status(500).send(error.message);
      }
}

const saveRandomUser = async (req, res) => {
      try {
            const {name, gender, email, phone, address, photoUrl} = req.body;
            const newUser = new users({
                  name,
                  gender,
                  email,
                  phone,
                  address,
                  photoUrl
            })
            await newUser.save();
            res.status(201).json(newUser); 
      } catch (error) {
            res.status(500).send(error.message);
      }
}

const updateUser = async (req, res) => {
      try {
            const id = req.params.id;
            const oneUser = await users.findOne({_id: id});
            const {name, gender, email, phone, address, photoUrl} = req.body;
            oneUser.name = name;
            oneUser.gender = gender;
            oneUser.email = email;
            oneUser.phone = phone;
            oneUser.address = address;
            oneUser.photoUrl = photoUrl;
            await oneUser.save();
            res.status(200).json(oneUser)
      } catch (error) {
            res.status(500).send(error.message);
      }
}

const deleteUser = async (req, res) => {
      try {
            const id = req.params.id;
            await users.deleteOne({_id: id});
            res.status(200).json({meessage: `The user no ${id} is Deleted`}); 
      } catch (error) {
            res.status(500).send(error.message);
      }
}

module.exports = {
      getAllUser,
      getRandomUser,
      saveRandomUser,
      updateUser,
      deleteUser
}