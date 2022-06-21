const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema(
  {
    floorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "floor",
      required: true,
    },
    user_type: { type: String, required: true },
    vehicle_type: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Ticket = mongoose.model("ticket", ticketSchema);
module.exports = Ticket;
