const express = require("express");
const rutaJuegos = express.Router();

const sqlite = require("sqlite3");
const db = new sqlite.Database("../../juegos.db");

rutaJuegos.get("/", (req, res, next) => {
  var id = parseInt(req.query.id);
  var query = "SELECT * FROM juego" + (id ? ` WHERE id = ${id}` : "");
  db.all(query, [], (rows) => {
    res.json({
      message: "success",
      data: rows,
    });
  });
});

rutaJuegos.post("/", (req, res, next) => {
  var id = parseInt(req.query.id);
  var query = `INSERT INTO juegos (nombre, anio, desarrolladora, imagen) VALUES ()`;
  db.all(query, [], (rows) => {
    res.json({
      message: "success",
      data: rows,
    });
  });
});

rutaJuegos.patch("/", (req, res, next) => {
  res.send("Modificar");
});

rutaJuegos.delete("/", (req, res, next) => {
  var id = parseInt(req.query.id);
  var query = `DELETE FROM juego WHERE id = ${id}`;
  db.all(query, [], (rows) => {
    res.json({
      message: "success",
      data: rows,
    });
  });
});

module.exports = rutaJuegos;
