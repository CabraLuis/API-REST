const express = require("express");
const rutaJuegos = express.Router();

rutaJuegos.get("/", (req, res, next) => {
  res.send("Peticion get");
});
rutaJuegos.post("/", (req, res, next) => {
  res.send("Peticion post");
});
rutaJuegos.patch("/", (req, res, next) => {
  res.send("Modificar");
});
rutaJuegos.delete("/", (req, res, next) => {
  res.send("Borrar");
});

module.exports.rutaJuegos = rutaJuegos;
