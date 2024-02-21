const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "cabra",
  password: "3000",
  database: "juego",
});

const app = express();

// app.use(express.json);

app.get("/juego", (req, res) => {
  let myQuery;
  if (typeof req.query.id == "undefined") {
    myQuery = `SELECT * FROM juegos`;
  } else {
    myQuery = `SELECT * FROM juegos WHERE id=${req.query.id}`;
  }

  try {
  } catch (err) {
    res.send(err.code + " / " + err.message);
  }
  connection.query(myQuery, function (err, results, fields) {
    if (results.length == 0) {
      res.status(404).json({ error: "Juego no encontrado" });
    } else {
      res.send(results);
    }
  });
});

// app.post("/juego", (req, res) => {
//   console.log(req.body);
//   let datos;
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
