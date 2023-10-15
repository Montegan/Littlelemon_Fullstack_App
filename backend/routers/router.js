const express = require("express");
const router = express.Router();
const myScehmas = require("../Models/Schemas");

router.post("/registered", async (req, res) => {
  //console.log(req.body)
  const { name, email, password, confirmPassword, telephone } = req.body;
  const UsersData = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    telephone: telephone,
  };
  const newReservations = new myScehmas.Users(UsersData);
  const saveReservations = await newReservations.save();
  if (saveReservations) {
    res.send("message recieved");
  }
  res.end();
});

router.post("/users", async(req, res) => {
  //   const userData = [
  //     {
  //       hello: "world",
  //       welcome: 1,
  //     },
  //   ];
  const verifyresult = await myScehmas.Users.findOne({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  if (verifyresult) {
    return res.send({message:"Success"});
  }else{
    return res.send({message:"Failed"});
  }
});

module.exports = router;
