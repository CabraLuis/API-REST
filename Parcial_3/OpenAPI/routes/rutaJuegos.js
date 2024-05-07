const express = require("express");
const rutaJuegos = express.Router();
const { query, validationResult, check } = require("express-validator");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const db = require("better-sqlite3")("../../juegos.db");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Juegos",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: [`${path.join(__dirname, "./routes/rutaJuegos.js")}`],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
rutaJuegos.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

rutaJuegos.use(express.json());

/**
 * @swagger
 * /juegos:
 *  get:
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *          minimum: 1
 *        description: The game's id
 */
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
