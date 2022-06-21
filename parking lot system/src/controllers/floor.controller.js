const express = require("express");
const Floor = require("../models/floor.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const floor = await Floor.find().lean().exec();
    return res.status(200).send(floor);
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});
router.post("/", async (req, res) => {
  try {
    const floor = await Floor.create(req.body);
    return res.status(201).send(floor);
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const floor = await Floor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(floor);
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const floor = await Floor.findByIdAndDelete(req.params.id);
    return res.status(200).send(floor);
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});

module.exports = router;
