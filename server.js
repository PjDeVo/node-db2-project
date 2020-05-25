const express = require("express");

const helmet = require("helmet");

const carsRouter = require("./cars/cars-router");

const app = express();

app.use(helmet());

app.use(express.json());

app.use("/api/cars", carsRouter);

module.exports = app;
