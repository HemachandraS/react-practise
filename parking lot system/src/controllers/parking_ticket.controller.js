const express = require("express");

const Ticket = require("../models/parking_ticket.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ticket = await Ticket.find().populate({ path:"floorId", select:{_id:0} }).lean().exec();
    return res.status(200).send(ticket);
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});
router.post("/", async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    return res.status(201).send(ticket);
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(ticket);
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    return res.status(200).send(ticket);
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});

module.exports = router;
