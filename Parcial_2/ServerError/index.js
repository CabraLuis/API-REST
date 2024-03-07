const express = require("express");
const app = express();

app.get("/servidor", (req, res, next) => {
  if (tru) {
    res.send("Error");
  } else {
    res.send("Error");
  }
});

app.get("/data", (req, res, next) => {
  try {
    throw new Error("Error en bd");
  } catch (e) {
    next(e);
  }
});

app.use((req, res, next) => {
  res.status(404).send("URL no definida");
});

app.use((err, res, next, req) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000, (req, res) => {
  console.log("App listening on port 3000!");
});
