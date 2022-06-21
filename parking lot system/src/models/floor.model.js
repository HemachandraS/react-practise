const mongoose = require("mongoose");
const floorSchema = new mongoose.Schema(
  {
    floor_no: { type: String, required: true },
    parking_spot_no: { type: String, required: true },
    parking_assistant: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Floor = mongoose.model("floor", floorSchema)
module.exports =Floor