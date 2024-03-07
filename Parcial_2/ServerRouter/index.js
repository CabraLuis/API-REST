const express = require("express");
const rutaJuegos = require("./routes/rutaJuegos");
const app = express();

app.use("/juegos", rutaJuegos);

app.listen(3000, (req, res) => {
  console.log("App listening on port 3000!");
});
