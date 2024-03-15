const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require("express");
const rutaJuegos = express.Router();

const db = require("better-sqlite3")("../../juegos.db");

rutaJuegos.get("/", (req, res, next) => {
  res.send("Responde GET");
});

rutaJuegos.post("/upload", upload.single("image"), (req, res, next) => {
  res.send("Subida exitosa");
});

rutaJuegos.patch("/", (req, res, next) => {
  res.send("Responde PATCH");
});

rutaJuegos.delete("/", (req, res, next) => {
  res.send("Responde DELETE");
});
module.exports = rutaJuegos;
