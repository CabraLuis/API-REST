// Importar Express
const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("combined"));
//Definir endpoints para GET y POST
app.get("/", (req, res) => {
  res.send("Peticion GET exitosa");
});
app.post("/", (req, res) => {
  res.send("Peticion POST exitosa");
});
//Iniciar server
app.listen(port, () => {
  console.log("App listening on port 3000!");
});
