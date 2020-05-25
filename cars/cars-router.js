const express = require("express");

const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars").then((cars) => {
    res.json(cars);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    db("cars")
      .where({ id })
      .then((car) => {
        res.status(201).json(car);
      })
      .catch((error) => {
        res.status(400).json({ Message: "failed to retrieve car" });
      });
  } else if (!id) {
    res.status(400).json({ errorMessage: "failed to retrieveID" });
  }
});

router.post("/", (req, res) => {
  const newCar = req.body;

  db("cars")
    .insert(newCar)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ errorMessage: "failed to post to cars database" });
    });
});

module.exports = router;
