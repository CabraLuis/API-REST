const express = require("express");
const rutaJuegos = express.Router();
const { query, validationResult, check } = require("express-validator");

const db = require("better-sqlite3")("../../juegos.db");

rutaJuegos.use(express.json());

rutaJuegos.get(
  "/",  
  query("id").notEmpty().isNumeric().escape(),
  (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const row = db
        .prepare(`SELECT * FROM juego WHERE id = ?`)
        .get(req.query.id);

      return res.send(row);
    }
    res.send({ errors: result.array() });
  }
);

rutaJuegos.post(
  "/",
  check(["nombre", "desarrolladora", "imagen"]).notEmpty().isString().escape(),
  check("anio").notEmpty().isInt().isLength(4),
  (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      db.prepare(
        `INSERT INTO juego (nombre, anio, desarrolladora, imagen) VALUES (?, ?, ?, ?)`
      ).run(
        req.body.nombre,
        req.body.anio,
        req.body.desarrolladora,
        req.body.imagen
      );

      return res.status(200).send("Juego agregado exitosamente");
    }
    res.send({ errors: result.array() });
  }
);

rutaJuegos.patch("/", (req, res, next) => {
  res.send("Responde PATCH");
});

rutaJuegos.delete("/", (req, res, next) => {
  res.send("Responde DELETE");
});
module.exports = rutaJuegos;
