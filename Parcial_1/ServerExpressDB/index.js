const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "cabra",
  password: "3000",
  database: "juego",
});

const app = express();

app.use(express.json);

app.get("/juego", (req, res) => {
  let myQuery = `SELECT * FROM juegos`;
  if (typeof req.query.id != "undefined") {
    myQuery = myQuery + ` WHERE id=${req.query.id}`;
  }

  try {
    connection.query(myQuery, function (err, results, fields) {
      results.length == 0
        ? res.status(404).json({ error: "Juego no encontrado" })
        : res.send(results);
    });
  } catch (err) {
    res.send(err.code + " / " + err.message);
  }
});

app.delete("/juego", (req, res) => {
  let myQuery = `DELETE FROM juegos WHERE id = ${req.query.id}`;

  try {
    connection.query(myQuery, function (err, results, fields) {
      results.length == 0
        ? res.status(404).json({ error: "Juego no encontrado" })
        : res.send(results);
    });
  } catch (err) {
    res.send(err.code + " / " + err.message);
  }
});

app.post("/juego", (req, res) => {
  let data = req.body;
  let myQuery = `INSERT INTO juegos VALUES (${data.id}, "${data.nombre}")`;

  try {
    connection.query(myQuery, function (err, results, fields) {
      results.length == 0
        ? res.status(404).json({ error: "No se pudo insertar" })
        : res.send(results);
    });
  } catch (err) {
    res.send(err.code + " / " + err.message);
  }
});

app.patch("/juego", (req, res) => {
  let data = req.body;
  let myQuery = `UPDATE juegos SET nombre = ${data.nombre} WHERE id = ${data.id}")`;

  try {
    connection.query(myQuery, function (err, results, fields) {
      results.length == 0
        ? res.status(404).json({ error: "No se encontro el juego" })
        : res.send(results);
    });
  } catch (err) {
    res.send(err.code + " / " + err.message);
  }
});

// app.post("/juego", (req, res) => {
//   console.log(req.body);
//   let data;
//   data = req.body;

//   let myQuery;
//   myQuery = `INSERT INTO juegos VALUES (id = ${data.id}, nombre = ${data.nombre})`;

//   connection.query(myQuery, function (err, results, fields) {
//     if (results.length == 0) {
//       res.status(404).json({ error: "Juego no encontrado" });
//     } else {
//       res.send(results);
//     }
//   });
// });

app.listen(3000, () => {
  console.log("Listen port 3000");
});
