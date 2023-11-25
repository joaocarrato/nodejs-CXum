const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const unity = require("./src/unity/unity.json");
const services = require("./src/services/services.json");
const barber = require("./src/barber/barber.json");
const schedule = require("./src/schedule/schedule.json");

app.get("/unity", (req, res) => {
  return res.json(unity);
});

app.get("/services", (req, res) => {
  return res.json(services);
});

app.get("/barber", (req, res) => {
  return res.json(barber);
});

app.get("/schedule", (req, res) => {
  return res.json(schedule);
});

app.listen(port, () => {
  console.log("servidor esta rodando");
});
