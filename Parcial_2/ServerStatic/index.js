const express = require("express");
const basicAuth = require("express-basic-auth");
const path = require("path");
const app = express();

// app.use(bearerToken())
// req.token

app.use(
  basicAuth({
    users: { cabra: "cabra" },
  })
);

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/get", (req, res) => {
  res.send("Peticion GET exitosa");
});

app.post("/", (req, res) => {
  res.send("Peticion POST exitosa");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
