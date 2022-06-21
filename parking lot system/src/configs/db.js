const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://murali:12345@cluster0.kh3gk.mongodb.net/Parking_Lots?retryWrites=true&w=majority"
  );
};

module.exports = connect;
