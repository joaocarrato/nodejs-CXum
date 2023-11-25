const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const produtos = require("./src/unity/unity.json");

app.get("/unity", (req, res) => {
  return res.json(produtos);
});

app.listen(port, () => {
  console.log("servidor esta rodando");
});
