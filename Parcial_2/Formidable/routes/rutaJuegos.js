const { formidable } = require("formidable");
const express = require("express");
const rutaJuegos = express.Router();

const db = require("better-sqlite3")("../../juegos.db");

rutaJuegos.get("/", (req, res, next) => {
  res.send("Responde GET");
});

rutaJuegos.post("/upload", (req, res, next) => {
  const form = formidable({ uploadDir: "upload/" });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });
});

rutaJuegos.patch("/", (req, res, next) => {
  res.send("Responde PATCH");
});

rutaJuegos.delete("/", (req, res, next) => {
  res.send("Responde DELETE");
});
module.exports = rutaJuegos;
