const express = require("express");
const rutaJuegos = express.Router();

const db = require("better-sqlite3")("../../juegos.db");

rutaJuegos.get("/", (req, res, next) => {
  var query = "SELECT * FROM juego";
  var id = parseInt(req.query.id);
  const rows = db.prepare("SELECT * FROM juego").all();
  res.json(rows);
});

module.exports = rutaJuegos;
