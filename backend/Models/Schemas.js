const mongoose = require("mongoose");
const Schemas = mongoose.Schema;

const userSchema = Schemas({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  confirmPassword: { type: String },
  telephone: { type: String },
});

const reservationInfo = Schemas({
  Date: { type: String },
  Time: { type: String },
  GuestNumber: { type: String },
  Occasion: { type: String },
  freeTime: [],
});

const UserData = new mongoose.model("UserData", userSchema, "users");
const ReservationInfo = new mongoose.model(
  'ReservationInfo',
  reservationInfo,
  'reservation_form'
);

const myScehmas = { Users: UserData, Resrvations: ReservationInfo };

module.exports = myScehmas;
