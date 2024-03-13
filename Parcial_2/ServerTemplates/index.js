const express = require("express");
const rutaJuegos = require("./routes/rutaJuegos.js");
const app = express();

app.set("view engine", "pug");
app.use("/juegos", rutaJuegos);

app.get("/pug", (req, res, next) => {
  res.render("index", {
    title: "Hola",
    message: "Funciona!",
    description: "Usando Pug en Express",
  });
});

app.use((req, res, next) => {
  res.status(404).send("URL not found");
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000, (req, res) => {
  console.log("App listening on port 3000!");
});
