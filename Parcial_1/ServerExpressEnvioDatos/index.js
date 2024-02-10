// Importar Express
const express = require("express");
const morgan = require("morgan");
const app = express();

//Middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// Rutas

// Parametros por cadena de consulta
app.get("/alumnos", (req, res) => {
  console.log(req.query);
  res.send("Peticion GET exitosa");
});

// Parametros por ruta
app.get("/maestros/:carrera", (req, res) => {
  console.log(req.params);
  res.send("Peticion POST exitosa");
});

// Parametros por body
app.get("/administrativos", (req, res) => {
  // console.log(req.body);
  for (const key in req.body) {
    console.log(req.body[key]);
  }
  res.send("Peticion POST exitosa");
});

// Parametros por formulario
app.get("/prefectos", (req, res) => {
  console.log(req.body);
  res.send("Peticion POST exitosa");
});

//Iniciar server
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
