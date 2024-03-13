// Importar Express
const express = require("express");
const app = express();
//Definir endpoints para GET y POST
app.get("/", (req, res) => {
  res.send("Peticion GET exitosa");
});
app.post("/", (req, res) => {
  res.send("Peticion POST exitosa");
});
//Iniciar server
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
