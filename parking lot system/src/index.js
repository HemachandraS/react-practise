const express = require("express");

const app = express();
const floorController = require("./controllers/floor.controller");
const ticketController = require("./controllers/parking_ticket.controller");

app.use(express.json());
app.get("/", async (req, res) => {
  try {
    return res.status(200).send("Welcome to Parking Lot");
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});
app.use("/floor", floorController);
app.use("/ticket", ticketController);

module.exports = app;
